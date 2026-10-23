/**
 * Centralized Asset Registry for Chanchal's Design Portfolio.
 *
 * - All 5 brand logo SVGs are already bundled locally in `public/assets/logos/logo-1.svg` .. `logo-5.svg`.
 * - All photos/images default to their local paths (`/assets/...` inside `public/assets/`).
 * - Drop your downloaded images into `public/assets/...` (or run `npm run download-assets`).
 * - Set `ALLOW_REMOTE_FALLBACK = false` when deploying to production if you want strict local-only media
 *   with zero requests to `sourceUrl`.
 */
export const ALLOW_REMOTE_FALLBACK = true;

export const ASSETS = {
  "meta": {
    "description": "Local asset paths (under public/assets/...) and original source URLs so you can download images separately and place them in public/assets/.",
    "note": "The 5 brand logo SVGs are already bundled locally in public/assets/logos/logo-1.svg through logo-5.svg."
  },
  "logos": {
    "logo1": {
      "localPath": "/assets/logos/logo-1.svg",
      "sourceUrl": "https://framerusercontent.com/images/JNlQ3ECduIgDzBrGtmQomn0W8.svg",
      "width": 74,
      "height": 32
    },
    "logo2": {
      "localPath": "/assets/logos/logo-2.svg",
      "sourceUrl": "https://framerusercontent.com/images/do7aze6nJd4iECAdqIN7S9GUPA.svg",
      "width": 92,
      "height": 40
    },
    "logo3": {
      "localPath": "/assets/logos/logo-3.svg",
      "sourceUrl": "https://framerusercontent.com/images/qxQvQAWDciv0ULnYIxJsauUPj1M.svg",
      "width": 100,
      "height": 42
    },
    "logo4": {
      "localPath": "/assets/logos/logo-4.svg",
      "sourceUrl": "https://framerusercontent.com/images/1PlsfYcI8rd3MKAOt8R51vSTQU.svg",
      "width": 92,
      "height": 40
    },
    "logo5": {
      "localPath": "/assets/logos/logo-5.svg",
      "sourceUrl": "https://framerusercontent.com/images/SEg9PmeTlmwHHgee0RIwhaLMus.svg",
      "width": 84,
      "height": 32
    }
  },
  "about": {
    "portrait1": {
      "localPath": "/assets/about/portrait-1.png",
      "sourceUrl": "https://framerusercontent.com/images/YaJ0QJve7txtqnC50DrJLfVoa1Y.png?width=2068&height=2808",
      "pixelWidth": 2068,
      "pixelHeight": 2808
    },
    "portrait2": {
      "localPath": "/assets/about/portrait-2.jpeg",
      "sourceUrl": "https://framerusercontent.com/images/ThRpe1zU3wyvFFAHfZckn6fDz8.jpeg?width=2296&height=4080",
      "pixelWidth": 2296,
      "pixelHeight": 4080
    }
  },
  "works": {
    "gullyLabs": {
      "thumbnail": {
        "localPath": "/assets/works/gully-labs/thumbnail.png",
        "sourceUrl": "https://framerusercontent.com/images/8ZdeJiBoPFAHB9OSlDqgz0vBvc.png?width=1638&height=1303"
      },
      "image2": {
        "localPath": "/assets/works/gully-labs/image-2.png",
        "sourceUrl": "https://framerusercontent.com/images/RZR7oMnSJeLTAkN80JAtS2iiN4.png?width=1140&height=802"
      },
      "image3": {
        "localPath": "/assets/works/gully-labs/image-3.png",
        "sourceUrl": "https://framerusercontent.com/images/GgDJfa5w8JA9eZiH2NnwMTAK04.png?width=1140&height=802"
      },
      "image4": {
        "localPath": "/assets/works/gully-labs/image-4.png",
        "sourceUrl": "https://framerusercontent.com/images/PQcAfFce7YFOFZMVrtOUg00k.png?width=2322&height=1572"
      },
      "image5": {
        "localPath": "/assets/works/gully-labs/image-5.png",
        "sourceUrl": "https://framerusercontent.com/images/G68s75IWKQqhwWQsFJwc5zl6NJU.png?width=1140&height=802"
      },
      "image6": {
        "localPath": "/assets/works/gully-labs/image-6.png",
        "sourceUrl": "https://framerusercontent.com/images/iZDV4PisoGaODVLlerDiXRUJMU.png?width=1140&height=802"
      },
      "image7": {
        "localPath": "/assets/works/gully-labs/image-7.png",
        "sourceUrl": "https://framerusercontent.com/images/p1BAePWyGHrZO8XcXBMeIuJXcw.png?width=2322&height=1572"
      }
    },
    "sleeplove": {
      "thumbnail": {
        "localPath": "/assets/works/sleeplove/thumbnail.jpg",
        "sourceUrl": "https://framerusercontent.com/images/pXVIMI7aSwSxeLwjLPKhNl3Ze8.jpg?width=8192&height=5464"
      },
      "image2": {
        "localPath": "/assets/works/sleeplove/image-2.png",
        "sourceUrl": "https://framerusercontent.com/images/o1bOMIzKVTmnRpHk2G6BZlTHY8.png?width=1140&height=802"
      },
      "image3": {
        "localPath": "/assets/works/sleeplove/image-3.png",
        "sourceUrl": "https://framerusercontent.com/images/Y10GBYz1UGJlQ9Hx2PiODOAMSGU.png?width=1140&height=802"
      },
      "image4": {
        "localPath": "/assets/works/sleeplove/image-4.png",
        "sourceUrl": "https://framerusercontent.com/images/AlfvasDDFMk504PVxtPwJh2SLa8.png?width=2322&height=1572"
      }
    },
    "shorelineLiving": {
      "thumbnail": {
        "localPath": "/assets/works/shoreline-living/thumbnail.jpg",
        "sourceUrl": "https://framerusercontent.com/images/pQVdYv7skMi19gfD8vzKt5kiug.jpg?lossless=1&width=3024&height=2342"
      },
      "image2": {
        "localPath": "/assets/works/shoreline-living/image-2.png",
        "sourceUrl": "https://framerusercontent.com/images/eN6LzNRNyaJjbF2begQlbCrZuAc.png?width=4000&height=3000"
      },
      "image3": {
        "localPath": "/assets/works/shoreline-living/image-3.jpg",
        "sourceUrl": "https://framerusercontent.com/images/Jp5TYOrYXDZIwyCn4mmy2bX7Js.jpg?width=5770&height=3852"
      },
      "image4": {
        "localPath": "/assets/works/shoreline-living/image-4.png",
        "sourceUrl": "https://framerusercontent.com/images/EO9jWbLIg0YjKt170FvboONkOQU.png?width=2560&height=1328"
      },
      "image5": {
        "localPath": "/assets/works/shoreline-living/image-5.png",
        "sourceUrl": "https://framerusercontent.com/images/2mQpVZMO6Vlb793KvR1jY9j6s.png?lossless=1&width=1726&height=1226"
      },
      "image6": {
        "localPath": "/assets/works/shoreline-living/image-6.png",
        "sourceUrl": "https://framerusercontent.com/images/oNK1WN0DQlMYGAdHBEhUWtBIRU8.png?width=2048&height=1536"
      },
      "image7": {
        "localPath": "/assets/works/shoreline-living/image-7.png",
        "sourceUrl": "https://framerusercontent.com/images/d92iTivwWWl9jwzLMphLCNCovaE.png?width=2560&height=1441"
      }
    },
    "gfgf": {
      "thumbnail": {
        "localPath": "/assets/works/gfgf/thumbnail.png",
        "sourceUrl": "https://framerusercontent.com/images/nlj8cvKiFIjLTca0yS9sTE4Xw.png?lossless=1&width=3262&height=2446"
      },
      "image4": {
        "localPath": "/assets/works/gfgf/image-4.png",
        "sourceUrl": "https://framerusercontent.com/images/45R6WuVXFrvpMcmjobozVybVhDM.png?lossless=1&width=2322&height=1572"
      },
      "image7": {
        "localPath": "/assets/works/gfgf/image-7.png",
        "sourceUrl": "https://framerusercontent.com/images/xvrfKJuoQZDzrNMyaq6vCyDrY9g.png?width=2322&height=1572"
      }
    }
  },
  "canvasCards": {
    "ashimaRaiza": {
      "localPath": "/assets/canvas/ashima-raiza.png",
      "sourceUrl": "https://framerusercontent.com/images/5e0wBk9og082XtilBOfthbukl0.png?width=3024&height=2905"
    },
    "flowerSpiral": {
      "localPath": "/assets/canvas/flower-spiral.png",
      "sourceUrl": "https://framerusercontent.com/images/TfD31tQDCTrRV8UvAQwlhzmHgk.png?width=3024&height=4032"
    },
    "anotherFlower": {
      "localPath": "/assets/canvas/another-flower.png",
      "sourceUrl": "https://framerusercontent.com/images/u3xJXFPZUO0qoGtaKXKznJBbw.png?width=2971&height=4096"
    },
    "gurdevSingh": {
      "localPath": "/assets/canvas/gurdev-singh.png",
      "sourceUrl": "https://framerusercontent.com/images/NheD3S8J9cRfykiAoMsdUytU158.png?width=2975&height=3967"
    },
    "mapBangalore": {
      "localPath": "/assets/canvas/map-bangalore.png",
      "sourceUrl": "https://framerusercontent.com/images/t87owD8bNbtMFUngJYxUnn3r4w.png?width=3024&height=2995"
    },
    "cubbonPark": {
      "localPath": "/assets/canvas/cubbon-park.png",
      "sourceUrl": "https://framerusercontent.com/images/r13iRdjegsPG5QPYZRcKSuQoD64.png?width=3024&height=4032"
    },
    "friendsHouse": {
      "localPath": "/assets/canvas/friends-house.png",
      "sourceUrl": "https://framerusercontent.com/images/hezRyuTZMpHSsB4KzjlS9pMp9A.png?width=3024&height=4032"
    },
    "jinxLifesaver": {
      "localPath": "/assets/canvas/jinx-lifesaver.png",
      "sourceUrl": "https://framerusercontent.com/images/l01n31TPm55dCwaAaw9CtTw9nE.png?width=3024&height=3658"
    },
    "dinerNearHouse": {
      "localPath": "/assets/canvas/diner-near-house.png",
      "sourceUrl": "https://framerusercontent.com/images/znWxzCf9rXZig9VPD2lDpyRrA.png?width=3024&height=4032"
    }
  }
};

/**
 * Always returns the local asset path (`/assets/...`) first so local files in `public/assets/`
 * are served automatically.
 */
export function resolveAsset(entry) {
  if (!entry) return '';
  if (typeof entry === 'string') return entry;
  return entry.localPath || entry.sourceUrl || '';
}
