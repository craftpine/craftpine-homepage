import * as React from 'react'

declare global {
  namespace JSX {
    interface IntrinsicElements {
      fegaussianblur: any;
      fecolormatrix: any;
      feblend: any;
      filter: any;
    }
  }
}
