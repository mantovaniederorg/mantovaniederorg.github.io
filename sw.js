importScripts('workbox-sw.prod.v1.1.0.js');

/**
 * DO NOT EDIT THE FILE MANIFEST ENTRY
 *
 * The method precache() does the following:
 * 1. Cache URLs in the manifest to a local cache.
 * 2. When a network request is made for any of these URLs the response
 *    will ALWAYS comes from the cache, NEVER the network.
 * 3. When the service worker changes ONLY assets with a revision change are
 *    updated, old cache entries are left as is.
 *
 * By changing the file manifest manually, your users may end up not receiving
 * new versions of files because the revision hasn't changed.
 *
 * Please use workbox-build or some other tool / approach to generate the file
 * manifest which accounts for changes to local files and update the revision
 * accordingly.
 */
const fileManifest = [
  {
    "url": "index.html",
    "revision": "af48e8c88c25a84a2040eb9ea551c082"
  },
  {
    "url": "inline.f704a643fda9425e3409.bundle.js",
    "revision": "076568cb1b4229a945a097de6b7b6c8d"
  },
  {
    "url": "main.ffe7dbd4e3021ff453bc.bundle.js",
    "revision": "f3068ff9f0c75fa2821d2884d1a4fdf0"
  },
  {
    "url": "polyfills.3ae08eaf6129a55130cb.bundle.js",
    "revision": "4d6e297c5c881a487e1e111ae4b363e3"
  },
  {
    "url": "vendor.b7580561cf063efe11ba.bundle.js",
    "revision": "baebeabe3301f9b89177660b45aa5f4f"
  },
  {
    "url": "styles.a28bdbc966076a42e0db.bundle.css",
    "revision": "a28bdbc966076a42e0dbf36cd433062a"
  },
  {
    "url": "assets/avatar.png",
    "revision": "bda9b390221c6fd0e98869cca64cfa25"
  },
  {
    "url": "assets/sda-control.svg",
    "revision": "7c6ac1a4d214dad88548deb55572c2a3"
  },
  {
    "url": "assets/super-store.svg",
    "revision": "8df0df15b5f843c322ac92e58e34fcce"
  },
  {
    "url": "assets/games\\bomber.jpg",
    "revision": "ffaf4b552f9d4a4f4bcf428a00a0acaa"
  },
  {
    "url": "assets/games\\captain.jpg",
    "revision": "592fadaed0f6733746e9b80cf22afd54"
  },
  {
    "url": "assets/games\\cdino.jpg",
    "revision": "e19d687971df94e3eb9529339d9f9a2e"
  },
  {
    "url": "assets/games\\chrono.jpg",
    "revision": "cce388fc36e3c35791590ecd63d0a986"
  },
  {
    "url": "assets/games\\diablo.jpg",
    "revision": "498ae2d0060a713ee331d07f45763ac2"
  },
  {
    "url": "assets/games\\dk.jpg",
    "revision": "10a02b225f71cfebbb965a3002573e52"
  },
  {
    "url": "assets/games\\doom.jpg",
    "revision": "9143885aae0293da949ec9d9d11ea2c8"
  },
  {
    "url": "assets/games\\final-fight.jpg",
    "revision": "09df5c429e9f36d36cd1fd71d650aee0"
  },
  {
    "url": "assets/games\\fzero.jpg",
    "revision": "32f24b1f5432b269b22c006355c8b1b7"
  },
  {
    "url": "assets/games\\ga.jpg",
    "revision": "4c9f917ab622ffded18c3c41aee727b6"
  },
  {
    "url": "assets/games\\goof.jpg",
    "revision": "63e6864e20e2d0d1da1cd46930553825"
  },
  {
    "url": "assets/games\\goof1.jpg",
    "revision": "3c7d1c6c4c360f2d429423a77cf8a0cf"
  },
  {
    "url": "assets/games\\ki.jpg",
    "revision": "d30d9db3d47c21e787d5a8680cd7291d"
  },
  {
    "url": "assets/games\\mario.jpg",
    "revision": "8696e995a1b0c46c204100681cd226dc"
  },
  {
    "url": "assets/games\\megaman.png",
    "revision": "d946b148aa9b3fb6315637cf3519cc8c"
  },
  {
    "url": "assets/games\\metal-gear.jpg",
    "revision": "565b0089d685460efa8a72c9f9906f3a"
  },
  {
    "url": "assets/games\\mortal-kombat.jpg",
    "revision": "df65bfd138fcd7c1eba21a3f1956f726"
  },
  {
    "url": "assets/games\\pokemon.jpg",
    "revision": "8f054f90ed3563c575aa0b1db6482d1a"
  },
  {
    "url": "assets/games\\rock.jpg",
    "revision": "70c27527bfa38e75a86658b3df4f9c94"
  },
  {
    "url": "assets/games\\sm.jpg",
    "revision": "b495fc921ef5a4b8b6c674af499c1ca4"
  },
  {
    "url": "assets/games\\sonic2.jpg",
    "revision": "193919534e6f0344c8642b03b1bbc2ff"
  },
  {
    "url": "assets/games\\street-fighter.jpg",
    "revision": "ededc61895683e62a556814cd86015ff"
  },
  {
    "url": "assets/games\\sunset.jpg",
    "revision": "17ee1d2de9f47f3cc6f01d1d8873bcfc"
  },
  {
    "url": "assets/games\\tomb.jpg",
    "revision": "c41739674ba2e6eef36f7f612a852121"
  },
  {
    "url": "assets/games\\topgear.jpg",
    "revision": "0559335f257af6d2a20d09986a43974b"
  },
  {
    "url": "assets/games\\zelda.jpg",
    "revision": "b2aeb3d7ab36646faba89826d8b112ad"
  },
  {
    "url": "assets/icons\\android-chrome-192x192.png",
    "revision": "023efab49b7a21d5b4bd1b997d396240"
  },
  {
    "url": "assets/icons\\android-chrome-512x512.png",
    "revision": "25601adabe9419f4295c2a85d7441459"
  },
  {
    "url": "assets/icons\\android\\android-launchericon-144-144.png",
    "revision": "61a2226740372be13b7840e66a3f96f0"
  },
  {
    "url": "assets/icons\\android\\android-launchericon-192-192.png",
    "revision": "32be8a1aad50853b5c5d314d2792c8c9"
  },
  {
    "url": "assets/icons\\android\\android-launchericon-48-48.png",
    "revision": "5dfd1c9942c38d39319d7e2899acff76"
  },
  {
    "url": "assets/icons\\android\\android-launchericon-512-512.png",
    "revision": "2b2d129af291d5b278af5a4715b1a6d6"
  },
  {
    "url": "assets/icons\\android\\android-launchericon-72-72.png",
    "revision": "048dce929b4328b90acebb7a08769526"
  },
  {
    "url": "assets/icons\\android\\android-launchericon-96-96.png",
    "revision": "66d14fee1b5d12155fcfdcd366a9f801"
  },
  {
    "url": "assets/icons\\apple-touch-icon.png",
    "revision": "2083a5629a3dd0a8b2158be066419313"
  },
  {
    "url": "assets/icons\\browserconfig.xml",
    "revision": "a493ba0aa0b8ec8068d786d7248bb92c"
  },
  {
    "url": "assets/icons\\chrome\\chrome-extensionmanagementpage-48-48.png",
    "revision": "5dfd1c9942c38d39319d7e2899acff76"
  },
  {
    "url": "assets/icons\\chrome\\chrome-favicon-16-16.png",
    "revision": "e27a9ed973032e5d48a7742c2d10b651"
  },
  {
    "url": "assets/icons\\chrome\\chrome-installprocess-128-128.png",
    "revision": "c7524bdd7efc8ac4ddf36b4a33582786"
  },
  {
    "url": "assets/icons\\favicon-16x16.png",
    "revision": "94264762277c483a2512f2c6b5985a32"
  },
  {
    "url": "assets/icons\\favicon-32x32.png",
    "revision": "68bd585bc0ec5ca588c2b77207c1e15b"
  },
  {
    "url": "assets/icons\\favicon.ico",
    "revision": "d734224c136778dbe9f39ae882d50467"
  },
  {
    "url": "assets/icons\\firefox\\firefox-general-128-128.png",
    "revision": "c7524bdd7efc8ac4ddf36b4a33582786"
  },
  {
    "url": "assets/icons\\firefox\\firefox-general-16-16.png",
    "revision": "e27a9ed973032e5d48a7742c2d10b651"
  },
  {
    "url": "assets/icons\\firefox\\firefox-general-256-256.png",
    "revision": "79d2a0f4f266223ac99ca4d7b2a344b9"
  },
  {
    "url": "assets/icons\\firefox\\firefox-general-32-32.png",
    "revision": "9bb46a92984d87fa5f6a9fcc123ee572"
  },
  {
    "url": "assets/icons\\firefox\\firefox-general-48-48.png",
    "revision": "5dfd1c9942c38d39319d7e2899acff76"
  },
  {
    "url": "assets/icons\\firefox\\firefox-general-64-64.png",
    "revision": "66c07494771c6f89707ad646933cab65"
  },
  {
    "url": "assets/icons\\firefox\\firefox-general-90-90.png",
    "revision": "92e9076b83a406699ff6a00c04fc55dd"
  },
  {
    "url": "assets/icons\\firefox\\firefox-marketplace-128-128.png",
    "revision": "c7524bdd7efc8ac4ddf36b4a33582786"
  },
  {
    "url": "assets/icons\\firefox\\firefox-marketplace-512-512.png",
    "revision": "2b2d129af291d5b278af5a4715b1a6d6"
  },
  {
    "url": "assets/icons\\icons.json",
    "revision": "500ad41ab276b42d998188d8e3906099"
  },
  {
    "url": "assets/icons\\ios\\ios-appicon-1024-1024.png",
    "revision": "83b506364f3553f346eb82d4353fe2d6"
  },
  {
    "url": "assets/icons\\ios\\ios-appicon-120-120.png",
    "revision": "45b075d562fce7853d4e927a4c1b1979"
  },
  {
    "url": "assets/icons\\ios\\ios-appicon-152-152.png",
    "revision": "72f51a7aa397d4eefa6ffd2ff7c64d6e"
  },
  {
    "url": "assets/icons\\ios\\ios-appicon-180-180.png",
    "revision": "b11893da7478f08169ebcea8f7f94fe4"
  },
  {
    "url": "assets/icons\\ios\\ios-appicon-76-76.png",
    "revision": "92163e1095c599fe9cd8f6f0efede35f"
  },
  {
    "url": "assets/icons\\ios\\ios-launchimage-1024-768.png",
    "revision": "536137def62b1ea4c3e99b80f8a8dcd1"
  },
  {
    "url": "assets/icons\\ios\\ios-launchimage-1242-2208.png",
    "revision": "cf3c46dd50aa5fcf5dd06372f01c1e8a"
  },
  {
    "url": "assets/icons\\ios\\ios-launchimage-1334-750.png",
    "revision": "530bcf57d37da45730a4035677ad889a"
  },
  {
    "url": "assets/icons\\ios\\ios-launchimage-1536-2048.png",
    "revision": "75ec7ddd2b41dfa0488e76ed9afbc6ba"
  },
  {
    "url": "assets/icons\\ios\\ios-launchimage-2048-1536.png",
    "revision": "0b2c132f505290076d3f1b49c4a402a4"
  },
  {
    "url": "assets/icons\\ios\\ios-launchimage-2208-1242.png",
    "revision": "4233d9895051edaeefbe447d7a2dc762"
  },
  {
    "url": "assets/icons\\ios\\ios-launchimage-640-1136.png",
    "revision": "eafbc873845bcab67b6baa236d920849"
  },
  {
    "url": "assets/icons\\ios\\ios-launchimage-640-960.png",
    "revision": "78f5f39d107a5641111371c24dcf10d9"
  },
  {
    "url": "assets/icons\\ios\\ios-launchimage-750-1334.png",
    "revision": "c273ba50b02e533f2646cbdabe53d81e"
  },
  {
    "url": "assets/icons\\ios\\ios-launchimage-768-1024.png",
    "revision": "b8105d086e845895a497956d47e5b583"
  },
  {
    "url": "assets/icons\\manifest.json",
    "revision": "c8e3b78f511f57bf0242db20616f37f5"
  },
  {
    "url": "assets/icons\\mstile-150x150.png",
    "revision": "b343f3fedfa05800d357ed009ed3dbef"
  },
  {
    "url": "assets/icons\\safari-pinned-tab.svg",
    "revision": "7109bd0dad1492f4a9ed77bd6cc83b78"
  },
  {
    "url": "assets/icons\\windows\\windows-smallsquare-24-24.png",
    "revision": "ee6c6031011e073be88fdfc29e53ebde"
  },
  {
    "url": "assets/icons\\windows\\windows-smallsquare-30-30.png",
    "revision": "a27447e8c27ba69f1b9b9b2db70f28c7"
  },
  {
    "url": "assets/icons\\windows\\windows-smallsquare-42-42.png",
    "revision": "78f174a6d342d5277dcae3b475ecd0a6"
  },
  {
    "url": "assets/icons\\windows\\windows-smallsquare-54-54.png",
    "revision": "fecf3c83688808f213f7eaf7e2ff1027"
  },
  {
    "url": "assets/icons\\windows\\windows-splashscreen-1116-540.png",
    "revision": "5e05397f278a9c49f66be1b0d95b492f"
  },
  {
    "url": "assets/icons\\windows\\windows-splashscreen-620-300.png",
    "revision": "52f2beadeda7137344363ce9c80b6ccc"
  },
  {
    "url": "assets/icons\\windows\\windows-splashscreen-868-420.png",
    "revision": "6f02b60c10c60defeba25031fecbf906"
  },
  {
    "url": "assets/icons\\windows\\windows-squarelogo-120-120.png",
    "revision": "45b075d562fce7853d4e927a4c1b1979"
  },
  {
    "url": "assets/icons\\windows\\windows-squarelogo-150-150.png",
    "revision": "71903c749134463d0edd8ecbb6f3fcfa"
  },
  {
    "url": "assets/icons\\windows\\windows-squarelogo-210-210.png",
    "revision": "0fea7d4ee1a5f8b4a1669dbc0d88a6ad"
  },
  {
    "url": "assets/icons\\windows\\windows-squarelogo-270-270.png",
    "revision": "5a63c1fb79312a2638d85046ad299bdc"
  },
  {
    "url": "assets/icons\\windows\\windows-storelogo-50-50.png",
    "revision": "61dd1a323887768b7583ddc8ec59ed0d"
  },
  {
    "url": "assets/icons\\windows\\windows-storelogo-70-70.png",
    "revision": "0cef483e679bbb7b02b44997c0b282c3"
  },
  {
    "url": "assets/icons\\windows\\windows-storelogo-90-90.png",
    "revision": "92e9076b83a406699ff6a00c04fc55dd"
  },
  {
    "url": "assets/icons\\windows\\windowsphone-appicon-106-106.png",
    "revision": "32347c28f19d0f0e3665c772c6b5a179"
  },
  {
    "url": "assets/icons\\windows\\windowsphone-appicon-44-44.png",
    "revision": "a216a3e357b278cde52f6e7431e27d92"
  },
  {
    "url": "assets/icons\\windows\\windowsphone-appicon-62-62.png",
    "revision": "445c856b9353dab8ad36bd3974ef03d2"
  },
  {
    "url": "assets/icons\\windows\\windowsphone-mediumtile-150-150.png",
    "revision": "71903c749134463d0edd8ecbb6f3fcfa"
  },
  {
    "url": "assets/icons\\windows\\windowsphone-mediumtile-210-210.png",
    "revision": "0fea7d4ee1a5f8b4a1669dbc0d88a6ad"
  },
  {
    "url": "assets/icons\\windows\\windowsphone-mediumtile-360-360.png",
    "revision": "71c04119e5316bcb1c592aaced0ac1f2"
  },
  {
    "url": "assets/icons\\windows\\windowsphone-smalltile-170-170.png",
    "revision": "269665461597d0a7b323a8f6e8a26d89"
  },
  {
    "url": "assets/icons\\windows\\windowsphone-smalltile-71-71.png",
    "revision": "61dc54d0958b62af6136de53fe2d6a00"
  },
  {
    "url": "assets/icons\\windows\\windowsphone-smalltile-99-99.png",
    "revision": "ad0ad6f7757f896ce6809d71898b1464"
  },
  {
    "url": "assets/icons\\windows\\windowsphone-storelogo-120-120.png",
    "revision": "45b075d562fce7853d4e927a4c1b1979"
  },
  {
    "url": "assets/icons\\windows\\windowsphone-storelogo-50-50.png",
    "revision": "61dd1a323887768b7583ddc8ec59ed0d"
  },
  {
    "url": "assets/icons\\windows\\windowsphone-storelogo-70-70.png",
    "revision": "0cef483e679bbb7b02b44997c0b282c3"
  },
  {
    "url": "assets/icons\\windows10\\BadgeLogo.scale-100.png",
    "revision": "ee6c6031011e073be88fdfc29e53ebde"
  },
  {
    "url": "assets/icons\\windows10\\BadgeLogo.scale-125.png",
    "revision": "a27447e8c27ba69f1b9b9b2db70f28c7"
  },
  {
    "url": "assets/icons\\windows10\\BadgeLogo.scale-150.png",
    "revision": "1790111997222692f0fb071401c241f2"
  },
  {
    "url": "assets/icons\\windows10\\BadgeLogo.scale-200.png",
    "revision": "5dfd1c9942c38d39319d7e2899acff76"
  },
  {
    "url": "assets/icons\\windows10\\BadgeLogo.scale-400.png",
    "revision": "66d14fee1b5d12155fcfdcd366a9f801"
  },
  {
    "url": "assets/icons\\windows10\\SplashScreen.scale-100.png",
    "revision": "52f2beadeda7137344363ce9c80b6ccc"
  },
  {
    "url": "assets/icons\\windows10\\SplashScreen.scale-125.png",
    "revision": "b618c408d06b3cce1e524f74cf4dd3ab"
  },
  {
    "url": "assets/icons\\windows10\\SplashScreen.scale-150.png",
    "revision": "1dfe506a6406d9a29e681a4241831d6a"
  },
  {
    "url": "assets/icons\\windows10\\SplashScreen.scale-200.png",
    "revision": "204e78f5897926c711cbcccfae980e1b"
  },
  {
    "url": "assets/icons\\windows10\\SplashScreen.scale-400.png",
    "revision": "5f63be8b18ecfe9f300249e8808c59ef"
  },
  {
    "url": "assets/icons\\windows10\\Square150x150Logo.scale-100.png",
    "revision": "71903c749134463d0edd8ecbb6f3fcfa"
  },
  {
    "url": "assets/icons\\windows10\\Square150x150Logo.scale-125.png",
    "revision": "18d0b5fd7394948197111b23b3b95800"
  },
  {
    "url": "assets/icons\\windows10\\Square150x150Logo.scale-150.png",
    "revision": "ef28d532976ddef58a7c1f0fa22ab988"
  },
  {
    "url": "assets/icons\\windows10\\Square150x150Logo.scale-200.png",
    "revision": "8f52ef157afc4d79d3eda2c73d260298"
  },
  {
    "url": "assets/icons\\windows10\\Square150x150Logo.scale-400.png",
    "revision": "5cc32e98c04d82635fa6ec78cf1fa52e"
  },
  {
    "url": "assets/icons\\windows10\\Square310x310Logo.scale-100.png",
    "revision": "a2286e6d2d9842188319d482ae7838ce"
  },
  {
    "url": "assets/icons\\windows10\\Square310x310Logo.scale-125.png",
    "revision": "30348c86125abffc1e0b32fceefbf766"
  },
  {
    "url": "assets/icons\\windows10\\Square310x310Logo.scale-150.png",
    "revision": "9556f5aa41027f22fd76e382bd16c6f3"
  },
  {
    "url": "assets/icons\\windows10\\Square310x310Logo.scale-200.png",
    "revision": "7b12bba4adf1af9adf26666175b0deb3"
  },
  {
    "url": "assets/icons\\windows10\\Square310x310Logo.scale-400.png",
    "revision": "2919da57c53b2cfbadd11899e0b93217"
  },
  {
    "url": "assets/icons\\windows10\\Square44x44Logo.scale-100.png",
    "revision": "a216a3e357b278cde52f6e7431e27d92"
  },
  {
    "url": "assets/icons\\windows10\\Square44x44Logo.scale-125.png",
    "revision": "e532cef40335a8d0f5f326bb8008c4bb"
  },
  {
    "url": "assets/icons\\windows10\\Square44x44Logo.scale-150.png",
    "revision": "b683bc5c2ef8ed1b34789bea1710dc74"
  },
  {
    "url": "assets/icons\\windows10\\Square44x44Logo.scale-200.png",
    "revision": "acc2c9fe9b5b2087e9bd86d51d9dd2f8"
  },
  {
    "url": "assets/icons\\windows10\\Square44x44Logo.scale-400.png",
    "revision": "f578a48f51b200566eab7c339903e0e8"
  },
  {
    "url": "assets/icons\\windows10\\Square44x44Logo.targetsize-16_altform-unplated.png",
    "revision": "e27a9ed973032e5d48a7742c2d10b651"
  },
  {
    "url": "assets/icons\\windows10\\Square44x44Logo.targetsize-16.png",
    "revision": "e27a9ed973032e5d48a7742c2d10b651"
  },
  {
    "url": "assets/icons\\windows10\\Square44x44Logo.targetsize-24_altform-unplated.png",
    "revision": "ee6c6031011e073be88fdfc29e53ebde"
  },
  {
    "url": "assets/icons\\windows10\\Square44x44Logo.targetsize-24.png",
    "revision": "ee6c6031011e073be88fdfc29e53ebde"
  },
  {
    "url": "assets/icons\\windows10\\Square44x44Logo.targetsize-256_altform-unplated.png",
    "revision": "79d2a0f4f266223ac99ca4d7b2a344b9"
  },
  {
    "url": "assets/icons\\windows10\\Square44x44Logo.targetsize-256.png",
    "revision": "79d2a0f4f266223ac99ca4d7b2a344b9"
  },
  {
    "url": "assets/icons\\windows10\\Square44x44Logo.targetsize-48_altform-unplated.png",
    "revision": "5dfd1c9942c38d39319d7e2899acff76"
  },
  {
    "url": "assets/icons\\windows10\\Square44x44Logo.targetsize-48.png",
    "revision": "5dfd1c9942c38d39319d7e2899acff76"
  },
  {
    "url": "assets/icons\\windows10\\Square71x71Logo.scale-100.png",
    "revision": "61dc54d0958b62af6136de53fe2d6a00"
  },
  {
    "url": "assets/icons\\windows10\\Square71x71Logo.scale-125.png",
    "revision": "509a23bafa9c062b37c0952aee39ed7e"
  },
  {
    "url": "assets/icons\\windows10\\Square71x71Logo.scale-150.png",
    "revision": "3ebdeca78a5f9674faef24261176060e"
  },
  {
    "url": "assets/icons\\windows10\\Square71x71Logo.scale-200.png",
    "revision": "cb7a7f2e49cb5bfc580eb7ca16917eee"
  },
  {
    "url": "assets/icons\\windows10\\Square71x71Logo.scale-400.png",
    "revision": "d69e4da3f1736f35c920ab8a9228d5c9"
  },
  {
    "url": "assets/icons\\windows10\\StoreLogo.png",
    "revision": "61dd1a323887768b7583ddc8ec59ed0d"
  },
  {
    "url": "assets/icons\\windows10\\StoreLogo.scale-100.png",
    "revision": "61dd1a323887768b7583ddc8ec59ed0d"
  },
  {
    "url": "assets/icons\\windows10\\StoreLogo.scale-125.png",
    "revision": "93884b2799fdcc529363d236d8c45e63"
  },
  {
    "url": "assets/icons\\windows10\\StoreLogo.scale-150.png",
    "revision": "a9373b2d79ec4fc72114e04384fae3e4"
  },
  {
    "url": "assets/icons\\windows10\\StoreLogo.scale-200.png",
    "revision": "222d16d092be140bb9685b6c17c799cf"
  },
  {
    "url": "assets/icons\\windows10\\StoreLogo.scale-400.png",
    "revision": "0fe78d38afd13fd316a34a2a2077f904"
  },
  {
    "url": "assets/icons\\windows10\\Wide310x150Logo.scale-100.png",
    "revision": "e027dc49e05aed313797311c86e6c601"
  },
  {
    "url": "assets/icons\\windows10\\Wide310x150Logo.scale-125.png",
    "revision": "e301345f5fa6ac865c4507ab5b7a3301"
  },
  {
    "url": "assets/icons\\windows10\\Wide310x150Logo.scale-150.png",
    "revision": "6d8c4e05fd27531c96018b97ab1f5630"
  },
  {
    "url": "assets/icons\\windows10\\Wide310x150Logo.scale-200.png",
    "revision": "52f2beadeda7137344363ce9c80b6ccc"
  },
  {
    "url": "assets/icons\\windows10\\Wide310x150Logo.scale-400.png",
    "revision": "204e78f5897926c711cbcccfae980e1b"
  },
  {
    "url": "manifest.json",
    "revision": "c13c50e6ae7e3765e05a736bde790b76"
  },
  {
    "url": "?utm_source=pwa",
    "revision": "c28c97979b8489a1f35e28dc796e56fa"
  }
];

const workboxSW = new self.WorkboxSW();
workboxSW.precache(fileManifest);
workboxSW.router.registerNavigationRoute("index.html");
