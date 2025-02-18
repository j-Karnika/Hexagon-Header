

// import {
//   AtomicExternal,
//   AtomicSearchBox,
//   AtomicSearchBoxQuerySuggestions,
//   AtomicSearchInterface
// } from '@coveo/atomic-react';

// import { buildSearchEngine } from '@coveo/headless';
// const TOKEN_ENDPOINT = '/endpoints/CoveoToken';

// const Component: React.FC= ({ }) => {


//   const addCoveoAssets = () => {
//     const link: HTMLLinkElement = document.createElement('link');
//     link.rel = 'stylesheet';
//     link.href = 'https://static.cloud.coveo.com/atomic/v3.2.3/themes/coveo.css';
//     document.head.append(link);

//     const script: HTMLScriptElement = document.createElement('script');
//     script.type = 'module';
//     script.src = 'https://static.cloud.coveo.com/atomic/v2/atomic.esm.js';
//     document.head.append(script);
//   };

//   addCoveoAssets();


//   const organizationId = 'pwbmknrr4rtrycvugyuxwfn2fcy';

//   const engine = buildSearchEngine({
//     configuration: {
//       accessToken: 'eyJhbGciOiJIUzI1NiJ9.eyJzZWFyY2hIdWIiOiJIRV9OZXh1c1NlYXJjaEh1YiIsInY4Ijp0cnVlLCJ0b2tlbklkIjoidjNoeW5ub2I2b3dzeDRtaHBtdHVhaWNpdWkiLCJvcmdhbml6YXRpb24iOiJwd2Jta25ycjRydHJ5Y3Z1Z3l1eHdmbjJmY3kiLCJ1c2VySWRzIjpbeyJ0eXBlIjoiVXNlciIsIm5hbWUiOiJhc21pdGhAZXhhbXBsZS5jb20iLCJwcm92aWRlciI6IkVtYWlsIFNlY3VyaXR5IFByb3ZpZGVyIn1dLCJyb2xlcyI6WyJxdWVyeUV4ZWN1dG9yIl0sImlzcyI6IlNlYXJjaEFwaSIsImV4cCI6MTczOTk1ODEzOCwiaWF0IjoxNzM5ODcxNzM4fQ.rDTiMYAIbwPlQEuVAN9Sw-p34TU-dn4DrtzYY7hoL1w',
//       organizationId,
//       // platformUrl: `https://${organizationId}.org.coveo.com`,
//       analytics: {
//         enabled: true,
//         originLevel3: `https://${organizationId}.analytics.org.coveo.com`
//       },
//       search: {
//         pipeline: 'HE_NexusSearchPipeline',
//         searchHub: 'HE_NexusSearchHub'
//       }

//     }
//   });

//   console.log('header component 1');

//   return (
//     <>
//       <style>
//         {`
//           .headerSearchBox {
//             width: 100%;
//           }
//           .searchBox {
//               width: 100%;
//               padding-right: calc(var(--lia-grid-gutter-width-md)* .5);
//               padding-left: calc(var(--lia-grid-gutter-width-md)* .5);
//               min-height: 49px;
//           }
//           .searchBox::part(wrapper){
//             display: flex;
//             width: 100%;
//             max-width: 760px;
//             margin: 0 auto;
//             border-radius: 100vh;
//             border: 1px solid var(--lia-bs-input-border-color);
//             transition: border-color var(--lia-timing-fast) var(--lia-timing-function), box-shadow var(--lia-timing-fast) var(--lia-timing-function);
//             outline: none;
//             padding: 10px;
//             color: var(--lia-bs-body-color);
//             background-color: var(--lia-bs-white);
//             position: relative;
//             align-items: center;
//             @media (max-width: 992px) {
//              max-width: 600px;
//             }
//             @media (max-width: 768px) {
//               width: 100%;
//               max-width: 100%;
//              }
//           }
//           .searchBox::part(textarea-spacer) {
//             padding: 0;
//             display:none;
//           }
//           .searchBox::part(input),
//           .searchBox::part(textarea){
//             border-radius: 0;
//             border: none;
//             outline :none;
//             color:var(--lia-bs-body-color);
//             padding: 0;
//             text-transform: capitalize;
//             font-size: var(--lia-bs-font-size-base);
//             white-space: nowrap;
//           }
//           .searchBox::part(textarea-expander)::after {
//            content:"";
//            padding: 0;
//           }
//           .searchBox::part(textarea-expander) {
//             padding:4px 10px 4px 34px
//           }
//           .searchBox::part(submit-button-wrapper){
//            position: absolute;
//             background: transparent;
//             width: unset;
//             pointer-events: none;
//             padding: 0;
//             margin: 0 0 0 5px;
//             color:var(--lia-bs-body-color);
//           }
//           .searchBox::part(submit-button) {
//             width:18px;
//             height: 18px;

//           }
//           .searchBox::part(submit-icon) {
//             width: 18px;
//             height: 18px;
//             color:var(--lia-bs-body-color);
//           }
//           .searchBox::part(clear-icon),
//           .searchBox::part(clear-button){
//             width: 12px;
//             height: 14px;
//             margin-right: 4px;
//             color:var(--lia-bs-body-color);
//           }
//           .searchBox::part(button):active{
//             border-radius: 0.5rem;
//             border: 1px solid #000000;
//             padding: 0.5rem;
//           }
//           .coveSearchBox::part(wrapper){
//             width : 80%;
//           }
//           `}
//       </style>
//       <div id="coveo-search-box">
//           <AtomicSearchInterface
//             engine={engine}
//             localization={i18n => {
//               i18n.addResourceBundle('en', 'translation', {
//                 'search-box-with-suggestions-macos':
//                   'Search field with suggestions. Suggestions may be available under this field. To send, press Enter.'
//               });
//             }}
//           >
//             <AtomicExternal>
//               <AtomicSearchBox redirectionUrl="https://hexagon-test.vercel.app/#q" class="searchBox">
//               </AtomicSearchBox>
//             </AtomicExternal>
//           </AtomicSearchInterface>
//       </div>
//     </>
//   );
// };
// export default Component;

import React, { useMemo } from "react";
import {
  AtomicExternal,
  AtomicSearchBox,
  AtomicSearchInterface,
} from "@coveo/atomic-react";
import { buildSearchEngine } from "@coveo/headless";

interface AtomicSearchBoxProps {
  accessToken: string;
  organizationId: string;
  pipeline: string;
  searchHub: string;
  redirectionUrl: string; // Added redirectionUrl as a prop
}

const AtomicSearchBoxComponent: React.FC<AtomicSearchBoxProps> = ({
  accessToken = 'eyJhbGciOiJIUzI1NiJ9.eyJzZWFyY2hIdWIiOiJIRV9OZXh1c1NlYXJjaEh1YiIsInY4Ijp0cnVlLCJ0b2tlbklkIjoicXlraGVieXlpdHQ0Y2pybXlvc3BucmtvMjQiLCJvcmdhbml6YXRpb24iOiJwd2Jta25ycjRydHJ5Y3Z1Z3l1eHdmbjJmY3kiLCJ1c2VySWRzIjpbeyJ0eXBlIjoiVXNlciIsIm5hbWUiOiJhc21pdGhAZXhhbXBsZS5jb20iLCJwcm92aWRlciI6IkVtYWlsIFNlY3VyaXR5IFByb3ZpZGVyIn1dLCJyb2xlcyI6WyJxdWVyeUV4ZWN1dG9yIl0sImlzcyI6IlNlYXJjaEFwaSIsImV4cCI6MTczOTk2MTQxNSwiaWF0IjoxNzM5ODc1MDE1fQ.PsiaT3BWVfM6DWe8E1ysDvOjcKk_toEawEgxhVg6iLM',

  organizationId ="pwbmknrr4rtrycvugyuxwfn2fcy",
  pipeline = 'HE_NexusSearchPipeline',
  searchHub = 'HE_NexusSearchHub',
  redirectionUrl,
}) => {
  // Memoize the search engine so it only updates when props change
  const engine = useMemo(() => {
    return buildSearchEngine({
      configuration: {
        accessToken,
        organizationId,
        search: {
          pipeline,
          searchHub,
        },
      },
    });
  }, [accessToken, organizationId, pipeline, searchHub]);

  return (
    <>
      {engine && (
        <AtomicSearchInterface engine={engine}>
          <AtomicExternal>
            <AtomicSearchBox redirectionUrl="http://localhost:3000#q=" />
          </AtomicExternal>
        </AtomicSearchInterface>
      )}
    </>
  );
};

export default AtomicSearchBoxComponent;