'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "8a686ca6b324bd5f71ce2e4029da0a49",
".git/config": "252bbbcf7856ebe93cc0abeafbffcb9f",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "01b1688f97f94776baae85d77b06048b",
".git/hooks/pre-push.sample": "3c5989301dd4b949dfa1f43738a22819",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/update.sample": "517f14b9239689dff8bda3022ebd9004",
".git/index": "10fe026fc87b48312da94f12df1363bf",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "08c1f41e42218cd6654ab567a36902aa",
".git/logs/refs/heads/main": "423c601e0b9e6abcb05a2184fbb0828a",
".git/logs/refs/remotes/origin/main": "e939a56f2406c27b12d28f95ca2afd08",
".git/objects/0a/1bfd7ca08be2878cd72446eee7cfcda5545eb9": "f002665803f869f70d78c7be1c874369",
".git/objects/0b/1e4dd993e2d41282a677634f77b1399154356f": "255bcff5aee7b673d792ad19736de4a4",
".git/objects/0e/70cbca212fdd36863aa5ce15d51def28e966b2": "cc2ddaa6512f18104a423ed7504aca69",
".git/objects/13/b6e8da8abedb6d999f223f3685c564a69fac32": "c216a7807543a3766ddbaf718a4e2809",
".git/objects/15/6ac051b9d1e8870cb36eac34df243f22ef0ce1": "92a1f2ecfa2b177874b4bc7a6e9c2592",
".git/objects/17/83722478436405f1f5c53b0569fdccd80e6647": "9585b5036e8a82f81142ed85fd7aa730",
".git/objects/17/d4482e7de6ebd597cf98af297da288e25612f4": "2363b99489d941c8472fe06b9c89e61d",
".git/objects/1f/01ff1911ad182868f9d142d0524ae85730321a": "603b767205e97d89d2c3f72db31e375a",
".git/objects/1f/0e8042b292fa9b7a7b93f9a8a33f19a0b31cd0": "6f890ae68916d9dee355e73f1ba91996",
".git/objects/20/2f2e0332f4638d53b9265b0fe8e6c5e0c45831": "1a634391b02e9d5ef3003ae9766220db",
".git/objects/20/c25af80a6461d5002d6fa75d160010c98eacf6": "d9193550caaa8739805d577769dacfd4",
".git/objects/22/2cc79654efe12fa6f004ea2a217cf3417061bc": "b5cf379e3ac154cef4661b06031ee94f",
".git/objects/29/dff7c2b5cf2615f634f0e5597fa652cd60d636": "3c41db162090cf4e7a97b53dfc19dc26",
".git/objects/2a/7c599c35be629001f3f5cbb39f32f6ade32927": "b3679220e6795021bb5e5153c6013b36",
".git/objects/2e/298597840c97119a9082924c3bd563cf6e248f": "9673b68cb165647573c95cbd2f8914fd",
".git/objects/32/46ad559eeae0370195978eaed83f1053ee13fd": "a043dbc0a0bda96ce2127799ccc27506",
".git/objects/3b/63f21fbba46424f0d6382fdf1da76d318db171": "730670e6c7de1c9bf71509d099cbe529",
".git/objects/3e/9fcb7849acb4e05ac560c4223714db614480f4": "f8ef93818bcb7d751638d448e6f0679b",
".git/objects/40/96020cad5932c34d323c61d76b12d5c39ab429": "c73cf22dfec359a08bce7fc4993d73ca",
".git/objects/42/622bfb7070848ab233cfe2ecc146bc5d82dfca": "e76fab2fb4ec941c17b2eae55eea059e",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/47/2b6fb4d18a0261920840dc546348743ef097db": "11948a92de4e381b95ecb021ecdb2960",
".git/objects/4b/fb686f3bb4f7274b2d8c8912c56dfb55346447": "864daf8e43deb7b858dc25464a5db348",
".git/objects/52/3c9ba88f34dad7e978eb2e8159c1235f4b70af": "47259018fbcfd3b65fcb7d27c6704e68",
".git/objects/54/32b957de4e0a4193f51327451c00fcc7f77d1a": "017c03980d76dd15f5b7f2994f2e1be6",
".git/objects/56/fa599c79ba3c7464b52bdd5fbbaaf6846fd161": "0cb1ca6bc68a93d449e815d85ca02466",
".git/objects/59/763bf90a7c5c66899afad4f7d11e3b98c8bc99": "e9442e8d1a60528dec4fb806b2259b52",
".git/objects/5a/77eaab8357d58328053f04de8b275459aaa2e2": "d3e493ce4df9abb47ecfea4baef928f8",
".git/objects/66/bc922da94ad2b61da930b99dd678beb0cdd8bd": "64b9a2e2074557dab50dd3247a7ea485",
".git/objects/69/6c070d27553f5cf4efd3c3e51d546072365c1a": "f3c9d84aa410090279c7deffc47eaf9d",
".git/objects/69/f52778353af120e91339523521155b7661b0bb": "54334c1d88764c2bf75da8ad17f64c9e",
".git/objects/6d/3943600d8e5d7e990b5ba06a834ee3e589fa01": "f5ec9701de6e200cc3dbe58166453f99",
".git/objects/74/27394724457529611446d38d27be5eb95b3bad": "291ac00ff0c237db97c1a1add0551ba8",
".git/objects/75/2ce43f2b809a793b545868ff95e9443e2d698f": "a644491fd04bd481bb25f09882e7f303",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/7c/9da13e1a86c7b76898c75b25a97bce9513c1c1": "9cdf15527e75fa29026c956137e65814",
".git/objects/84/0fe8a5f52a23829ddc8495c295690aa369151d": "9c7bb9c736b80fd0388611991ef894bc",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8b/a6115c61fa64c76b454c6554a1f49d73f24578": "20d977a7a224dbf6f6508b32b7169308",
".git/objects/8c/e0a1e98f924e11e920598f7be285cdfd511553": "d26be1abe5ed7a3900075716ca53625b",
".git/objects/8e/e058d64c3a1042f8a9736c87d5f24f0f275c30": "21271ad596013cb09dcaae6bef47e1f6",
".git/objects/92/694b8e8df5b8c7ba4d91d03f4368ae52619be7": "ab906aca043c8f5eb6d1bd0bf1130013",
".git/objects/92/cc51bc1486c07d26eebccad6e564fb7d6bb22a": "07554835afb15a99a14c4aaf46fe1ffc",
".git/objects/93/80573b7e33ef8cce8c563d7c0085abb21a7706": "95de6d5b02506e6c510a0286c8be0d0d",
".git/objects/96/6a847c4e06fa7c04779442398fffc03f9b0d63": "68921b446054394c3ee3e2fefb28c555",
".git/objects/96/8a91cd7917709d2ea89c8786c2a93bcd2e4f84": "dfed9e560aba7a2af5f48f2cee46ceb8",
".git/objects/97/c6289ee71a9db1d350fc23818bee3c83182205": "3b8dea8fe71bf4ad88345e4f82549485",
".git/objects/98/dbc8613d392996703c8785fb2938e5b468ae14": "08bc2a2f1dfb9a338e836793d1ce96fb",
".git/objects/9d/c71e213c317340f9ec00de65d52866e83cf955": "04cd6edf86470b6b5284dcafba153f4c",
".git/objects/9e/0066a1e88dd37b8c294f3a8d0d9033cdcd5c10": "89a70a715311d479745cc1b71f4bd986",
".git/objects/a1/0bbef21593fc91f5752712bfaf12e108faf8a0": "4b95ebac3e15d78f84366681072ee6b6",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/a1/b31de758f1eb171247d6a7be19dfa643cf823f": "d203d785ec7bc3c8a36ca345a9c54314",
".git/objects/a5/a01350f1e15bcedcfb0a02f30724639217cb04": "100d7be5cfa78748851ad74e8b481bc1",
".git/objects/a6/3ac75fde365b0d15bace3e6217d50d554b7d4f": "03a1ce903e10e8b1154c148abbef447b",
".git/objects/a6/812bf12d39947e1e4b0ed7599bf33736702c20": "8530599b1c20bf896d6b23dec84c95dd",
".git/objects/a8/beffd3ad4fe54d6cabccf83a05477d6a986cd0": "6677888e4a051c7838b5b240c09f0981",
".git/objects/a9/91f51138ffe059d588003dc7936aff059a0428": "b73a35563fa129bd884d8b5c53ee9231",
".git/objects/ab/39e746ab681938c55d19b8ac56f3ad5aa907f5": "f79ec6640a6c2e60ecb0799988bf0d53",
".git/objects/ad/2f90b78480aeb6608226d9db4ecbd3ec06aaeb": "4add97a99941aa0e9eed0f2173416ade",
".git/objects/ae/05cbd15a019b18cce75a6cc05bf022019e5794": "77088728c61a5277337149b70ce24b2d",
".git/objects/ae/24fc1484fb9b296f028346e8687436b3a92371": "177538d9d4ec512c52b3e66d5453bd70",
".git/objects/b0/01e257e0cacdff3e405955f5175693ad451777": "5988c44d91d20fdb56c841de749259c6",
".git/objects/b3/9a432fa2c723557f702748d43756a45f0d3981": "99dccca73b685156138bcbd196b764bc",
".git/objects/b5/ab36a979f1217f500c60776a93dac977d86cfd": "eac621e118bf970016fe794f3ae0a97b",
".git/objects/b5/af92c3843d8a52624c7cdeed06bb20973a99f9": "86bdf95698c2ebe316fa7d68916dd83e",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/bd/2e1c875141d3175f14bf70f9b57d44271bca25": "8d513ad880416db014b59144d0560177",
".git/objects/be/f703a17b46a886112525c0d90d81d4e2c2886d": "02bd1c6f637301a7bc8bd4f1bd5f5176",
".git/objects/bf/755d6db0426a28b2cf8df4e72aa03754022a26": "5d2ba4fc88741bee05c51e205c0f9a95",
".git/objects/c6/75a187b25b07d365fe0860151b838da642e621": "380352d382f3cfc99cfeed8bb95c07d8",
".git/objects/c8/28b74175214c0dc71ac71a385d6261d2012c2c": "5b8300ef1ff0bb87202a552c442b000b",
".git/objects/c8/b42c773f7a77174f99498f0de8eb954d6d1126": "e78a208f566dc489e10982da235aaa21",
".git/objects/c8/b63decd954d558af9f8a1ea203db75385c814b": "53db4fb5e102aa4829f1cb959ce728bc",
".git/objects/c9/543458560f3095039fbd6a92726c0faf0dc438": "75474261660675106c81a9141d1e277b",
".git/objects/ca/46099720ffd41172e8c4c96aca09294dba6893": "a29bd50b6cdcb58e52c9daff57e5f91b",
".git/objects/cc/e410c3c057e34bc743c749489b58b9730a4b8f": "83595225f9a309aaec22f5b3c1c7098b",
".git/objects/cc/fab74c1f56c330985060e2247607eaedb3c7d7": "ad5b6117df489509af208438785f208b",
".git/objects/d2/5b9fc339f936ddfd6b422cb4df80026ce8ac35": "da15344536130ec3fde7411366d95e28",
".git/objects/d3/a765a0b43331a6c88f8b24df0cfea22c8d3ec9": "73fc0311ad536cf030585eaef5009c5c",
".git/objects/d4/7de875466797ca425bad5cd0f35b70948cc6b4": "ffe74d6331494b9a8eb8f29c583fa345",
".git/objects/d4/c2e2d98b4ff7de0556f6f584ad4044158b0221": "60d4e69eec444d541f046b74b48480a5",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d7/20640d2416f18b27565c3778595bc194169847": "95599e82de7cbcc28a322181c2ad0083",
".git/objects/d7/5aece88d2d63a8b8b999c349a14df9a3099c3a": "753828343629218655ed5d0f1268daae",
".git/objects/dd/bd1ef43500bd4512b98823c4e58d208e4185b7": "2be56abc04500e6cae2cd8d5585581d3",
".git/objects/e1/a8244f308133c16f67a3113b396f2ba84873dc": "8f2dec63fa7fad905b84b3c56bc2ccf9",
".git/objects/e4/75ed337931c52c439fc9c78c473f5cb53223ee": "31a8a12c6eee4fc4b934fbb92e012cac",
".git/objects/e4/c1e61c0a99c8828c649f1d781ee7a3a482c671": "802ab44d7066eba123fbacf3e87e9737",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/ea/63a275bf1de024d918539aefc9157cfc64b479": "ae5e6e2a93267bcd8d54c57dc794dc7b",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/eb/da9293220f3e15be1110ee839d5964b2e7cac1": "d37e3577d5d59fdb86591a050217d305",
".git/objects/ef/1410c0e5cd57010e819f37531b8bce5dfcb22b": "a7c459c64cca743393330c002023f659",
".git/objects/ef/49dd504a85555d2e3f55b2d9031b4fed36300b": "76d16d1ea835de879e006a2868b3061c",
".git/objects/f7/34242e96eed03ce0021ecb58a741b4fd332b78": "7d7bafe92cbcf3c7d9ea8ec9e86a658d",
".git/objects/fb/accec044128c9b20e273d5921bbc7bd4d40c5a": "6b02ae0f20b8d25bfd8e2ff6c2e5c8cd",
".git/objects/fd/703d1f36b3ab7ec34deeb0dcf04e867db75265": "2bf9e456605aa1d76e5f42ef8aadcdae",
".git/packed-refs": "a891e6bb26eb0d480aef486a7e8ea166",
".git/refs/heads/main": "d367eec1f6893d9122d829834a30300a",
".git/refs/remotes/origin/main": "d367eec1f6893d9122d829834a30300a",
".git/tgitchangelist": "d41d8cd98f00b204e9800998ecf8427e",
"assets/AssetManifest.json": "86a479b77a9bc30d3d7caa43ce56ac2f",
"assets/assets/icons/Documents.svg": "0d66436fde3818811c82319665ef91fd",
"assets/assets/icons/doc_file.svg": "c6c3abe38f2b4e22ab33399b26966b1f",
"assets/assets/icons/drop_box.svg": "d427e188a7aee4612446d0e9d26e76f1",
"assets/assets/icons/excle_file.svg": "9986607c30659e3d222f9908141884f9",
"assets/assets/icons/Figma_file.svg": "90224db6835092a278153e0f60e8c203",
"assets/assets/icons/folder.svg": "8c11f522cd36f0cbd9c02eb2b689cbb9",
"assets/assets/icons/google_drive.svg": "a4cd4325c28cee54264a4942fcf6ef48",
"assets/assets/icons/logo.svg": "6194acb4fae31a2a2ee26ff61d8c644e",
"assets/assets/icons/media.svg": "e790cb1d2138f7a9d1b404abf8346eb1",
"assets/assets/icons/media_file.svg": "5b8f2b094278f5d9378bca249cf80fc1",
"assets/assets/icons/menu_dashbord.svg": "5e8d164243b3e28c22a8a5e35719c96e",
"assets/assets/icons/menu_doc.svg": "c5a576281e34f54d9e041410d002443c",
"assets/assets/icons/menu_notification.svg": "f49436dd0acd00dc43ab287c7ac3ff4f",
"assets/assets/icons/menu_profile.svg": "134c2274ffaca9441fe7523b2f476608",
"assets/assets/icons/menu_setting.svg": "32ab0402dc07a66d078c758ddb0aa798",
"assets/assets/icons/menu_store.svg": "45f31f1388616a22053ea6a99ed5904a",
"assets/assets/icons/menu_task.svg": "fa731cbcb073759bd82c699331ef7e93",
"assets/assets/icons/menu_tran.svg": "acdaeac5ea677c4a479a1d656ea3d5c1",
"assets/assets/icons/one_drive.svg": "0b0ca635ef35ec9beebb18aaf20cd5d9",
"assets/assets/icons/pdf_file.svg": "4ea6d2b9e631ee54164987b57fa240c7",
"assets/assets/icons/Search.svg": "82ad5e39b306dc6a42809cbeef651e64",
"assets/assets/icons/sound_file.svg": "d346e8558ced623138787011e0ca7e88",
"assets/assets/icons/unknown.svg": "2fc91e195e7a0d6279c01552403c3b89",
"assets/assets/icons/xd_file.svg": "fd95a4cd96e6c7251ebeac76b7b7c8b9",
"assets/assets/Logo.png": "d32ce373ff2271a3fa18de7f1710e236",
"assets/assets/needle.png": "05aa061ff6f0e7c6c038a70381c43eba",
"assets/assets/pilot.PNG": "6fc55a44548d9ce34945cf53cf3d888a",
"assets/assets/Publish.png": "6f95739a5c4edbc0b8574f99571b98c7",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1",
"assets/NOTICES": "6fa3c2b29e5fe87e3277565d3c5f46d9",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/flutter_dropzone_web/assets/flutter_dropzone.js": "293130157c75eed869a41f5e53c1b313",
"assets/packages/wakelock_web/assets/no_sleep.js": "7748a45cd593f33280669b29c2c8919a",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "764af1a04010600fddccf196e20860fd",
"/": "764af1a04010600fddccf196e20860fd",
"main.dart.js": "ecec522292ad40abb2358619765d12c2",
"manifest.json": "8fc634592dfd17924be0792416d64dbc",
"version.json": "c2ba4a3dfc8d61f8fc5c1126d1650179"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
