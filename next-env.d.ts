/// <reference types="next" />
/// <reference types="next/image-types/global" />

// NOTE: This file should not be edited
// see https://nextjs.org/docs/basic-features/typescript for more information.

import * as React from "react";

declare global {
  namespace JSX {
    interface IntrinsicElements {
      fegaussianblur: any;
      fecolormatrix: any;
      feblend: any;
      filter: any
    }
  }
}
