#!/usr/bin/env node

import path from "node:path";
import fs from "node:fs";
import url from "node:url";
import { V86 } from "./build/libv86.mjs";
const __dirname = url.fileURLToPath(new URL(".", import.meta.url));

const V86_ROOT = path.join(__dirname, "./");
//* these paths are EW
const OUTPUT_FILE = path.join(V86_ROOT, "images/alpine-state.bin");

var emulator = new V86({
    bios: { url: path.join(V86_ROOT, "bios/seabios.bin") },
    vga_bios: { url: path.join(V86_ROOT, "bios/vgabios.bin") },
    autostart: true,
    memory_size: 512 * 1024 * 1024,
    vga_memory_size: 8 * 1024 * 1024,
    network_relay_url: "<UNUSED>",
    bzimage_initrd_from_filesystem: true,
    cmdline: "rw root=host9p rootfstype=9p rootflags=trans=virtio,cache=loose modules=virtio_pci tsc=reliable init_on_free=on",
    filesystem: {
        baseurl: path.join(V86_ROOT, "images/alpine-rootfs-flat"),
        basefs: path.join(V86_ROOT, "images/alpine-fs.json"),
    },
});

console.log("Now booting, please stand by ...");

let serial_text = "";
let booted = false;

emulator.add_listener("serial0-output-byte", function(byte)
{
    const c = String.fromCharCode(byte);
    //process.stdout.write(c);

    serial_text += c;

    if(!booted && serial_text.endsWith("localhost:~# "))
    {
        booted = true;
        emulator.serial0_send("echo 'echo \"Welcome to H8D13 Alpine in Browser.\"' >> /root/.profile\n");
        emulator.serial0_send("echo 'echo -e \"Kernel \\\\e[1;31m$(uname -r)\\\\e[0m on an \\\\e[1;31m$(uname -m)\\\\e[0m (\\\\e[1;31m$(uname -n)\\\\e[0m)\"' >> /root/.profile\n");
        //* Can modify anything before what is bellow
        emulator.serial0_send("sync;echo 3 >/proc/sys/vm/drop_caches\n");

        setTimeout(async function ()
            {
                const s = await emulator.save_state();

                fs.writeFile(OUTPUT_FILE, new Uint8Array(s), function(e)
                    {
                        if(e) throw e;
                        console.log("Saved as " + OUTPUT_FILE);
                        emulator.destroy();
                    });
            }, 15 * 1000);
    }
});
