import { Icon } from '@chakra-ui/icons';
import React from 'react';
interface Props {
  color?: string;
  boxSize?: string;
}
export const AmazonPayMedium = (props: Props) => (
  <Icon viewBox="0 0 34 24" {...props}>
    <path
      d="M0 4C0 1.79086 1.79086 0 4 0H42C44.2091 0 46 1.79086 46 4V28C46 30.2091 44.2091 32 42 32H4C1.79086 32 0 30.2091 0 28V4Z"
      fill="white"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M36.391 18.5975H37.5092H37.5101C37.6271 18.5998 37.7243 18.5032 37.7286 18.3803V15.1223C37.7286 14.7131 37.7495 14.3436 37.9064 13.974C38.0141 13.6929 38.2678 13.5036 38.5558 13.4896C39.271 13.4896 39.2641 14.3136 39.2587 14.9608C39.2583 15.0154 39.2578 15.0687 39.2578 15.1202V18.4075C39.2717 18.5129 39.3553 18.5929 39.4564 18.5975H40.5845C40.6915 18.5998 40.7836 18.5186 40.8 18.4075V14.5983C40.8 14.0126 40.8 13.1974 40.507 12.713C40.1903 12.191 39.6997 12 39.1973 12C38.4227 12 37.9828 12.3946 37.669 13.2224H37.6472V12.2965C37.6245 12.1997 37.5434 12.1306 37.4486 12.1274H36.4079C36.2979 12.1245 36.2043 12.2107 36.1924 12.3257V18.3803C36.1938 18.4964 36.2807 18.5914 36.391 18.5975ZM35.3385 15.4219C35.3385 13.5116 34.4378 12.0084 32.7725 12.0084C31.15 12.0084 30.2493 13.4865 30.2493 15.3582C30.2493 17.23 31.139 18.7332 32.7725 18.7332C34.3455 18.7332 35.3385 17.2686 35.3385 15.4219ZM31.9036 15.1672C31.9036 14.4281 31.9562 13.2443 32.7834 13.2443C33.1389 13.2443 33.3902 13.4124 33.5163 13.83C33.6632 14.3133 33.6841 14.925 33.6841 15.4344C33.6841 16.2111 33.6513 17.4847 32.7725 17.4847C31.9033 17.4847 31.9035 15.9405 31.9036 15.1917L31.9036 15.1672ZM10.9214 18.61H12.0425H12.0435C12.0997 18.6114 12.1542 18.5891 12.1948 18.5482C12.2355 18.5072 12.2589 18.451 12.2599 18.3918V15.1839L12.2599 15.1337C12.2595 14.4362 12.2589 13.5136 13.0345 13.5136C13.7516 13.5136 13.7405 14.3242 13.7315 14.9787V14.9788V14.9788C13.7305 15.0494 13.7296 15.1181 13.7296 15.1839V18.3928C13.7315 18.5087 13.8181 18.6034 13.9282 18.61H15.0523C15.1084 18.6111 15.1626 18.5887 15.203 18.5478C15.2434 18.5069 15.2667 18.4508 15.2678 18.3918V15.1839L15.2677 15.1076C15.267 14.7677 15.2661 14.3091 15.373 14.0241C15.4821 13.7328 15.7457 13.5378 16.0433 13.5283C16.368 13.5283 16.6193 13.6431 16.7027 14.0502C16.7453 14.2462 16.7397 14.7004 16.7361 15.0016C16.7352 15.0727 16.7344 15.1353 16.7344 15.1839V18.3928C16.7359 18.5089 16.8228 18.6039 16.9331 18.61H18.0542C18.1104 18.6114 18.1649 18.5891 18.2055 18.5482C18.2462 18.5072 18.2696 18.451 18.2706 18.3918V14.5722C18.2706 14.4791 18.2722 14.3839 18.2737 14.2878L18.2737 14.2876C18.2829 13.7173 18.2927 13.1102 17.9876 12.6743C17.6179 12.1799 17.0232 11.9335 16.432 12.0298C15.8408 12.1261 15.3449 12.55 15.1347 13.1389C14.8199 12.3737 14.3701 12.0177 13.679 12.0177C12.9878 12.0177 12.4744 12.3737 12.2024 13.1389H12.1815V12.3487C12.1756 12.236 12.09 12.1461 11.9829 12.1399H10.9373C10.8218 12.1387 10.7265 12.2346 10.7228 12.356V18.4106C10.7329 18.5195 10.8174 18.6043 10.9214 18.61ZM8.97009 18.6559C8.89625 18.7233 8.79013 18.7345 8.70496 18.6841C8.38724 18.4062 8.29145 18.256 8.14434 18.0253C8.11904 17.9856 8.09221 17.9436 8.06248 17.8981C7.44582 18.5578 7.00989 18.7551 6.21251 18.7551C5.26815 18.7551 4.53333 18.1423 4.53333 16.9168C4.53333 15.9595 5.02983 15.3092 5.72494 14.9898C6.23822 14.753 6.92306 14.6795 7.51514 14.6159C7.62523 14.6041 7.73211 14.5927 7.83409 14.5805V14.4281C7.83409 14.3991 7.83431 14.3695 7.83454 14.3396V14.3395V14.3395V14.3394V14.3394V14.3394C7.8365 14.0795 7.83869 13.7902 7.69805 13.5721C7.56101 13.355 7.30084 13.2663 7.06848 13.2663C6.64049 13.2663 6.25918 13.497 6.16583 13.974C6.154 14.0853 6.07255 14.1744 5.96723 14.1912L4.88882 14.0669C4.83501 14.0588 4.78671 14.0279 4.75518 13.9813C4.72366 13.9348 4.71166 13.8767 4.722 13.8206C4.97124 12.4343 6.16285 12.0157 7.23034 12.0157C7.7765 12.0157 8.48948 12.1681 8.91846 12.6023C9.42205 13.098 9.41893 13.7468 9.41553 14.4559C9.41525 14.5145 9.41496 14.5734 9.41496 14.6327V16.469C9.41496 16.9635 9.5895 17.2095 9.77335 17.4686L9.77339 17.4687C9.79521 17.4994 9.81717 17.5304 9.83898 17.5619C9.91047 17.6663 9.92636 17.7968 9.83898 17.8751C9.60959 18.0766 9.20246 18.4482 8.97903 18.658L8.97009 18.6559ZM7.83904 15.781L7.83907 15.8382C7.83947 16.2724 7.8398 16.6406 7.62951 17.0337C7.45077 17.3657 7.16776 17.5703 6.85199 17.5703C6.42201 17.5703 6.17078 17.2258 6.17078 16.7143C6.17078 15.71 7.02775 15.5273 7.83904 15.5273V15.781ZM24.4758 17.4643C24.4977 17.4951 24.5197 17.5261 24.5415 17.5577C24.617 17.6663 24.6329 17.7937 24.5365 17.8657C24.3072 18.0672 23.9 18.4398 23.6766 18.6486C23.6023 18.715 23.4966 18.7258 23.4115 18.6758C23.0924 18.3967 22.9979 18.2487 22.8486 18.015C22.8237 17.9759 22.7973 17.9345 22.768 17.8897C22.1523 18.5494 21.7134 18.7467 20.919 18.7467C19.9747 18.7467 19.2398 18.134 19.2398 16.9095C19.2398 15.9512 19.7334 15.3008 20.4364 14.9814C20.9508 14.7437 21.6395 14.6706 22.2333 14.6075C22.341 14.596 22.4457 14.5849 22.5456 14.5732V14.4239C22.5456 14.395 22.5458 14.3655 22.546 14.3356C22.548 14.0756 22.5501 13.7862 22.4085 13.569C22.2755 13.3519 22.0103 13.2621 21.779 13.2621C21.351 13.2621 20.9716 13.4928 20.8773 13.9698C20.8651 14.081 20.7838 14.1699 20.6787 14.187L19.5914 14.0638C19.5371 14.056 19.4884 14.025 19.4566 13.9782C19.4249 13.9313 19.4129 13.8728 19.4235 13.8164C19.6738 12.429 20.8654 12.0115 21.9329 12.0115C22.478 12.0115 23.191 12.1639 23.621 12.5982C24.1256 13.0912 24.1221 13.7351 24.1182 14.4405C24.1178 14.5027 24.1175 14.5654 24.1175 14.6285V16.4658C24.1175 16.9593 24.292 17.2052 24.4758 17.4643ZM21.5605 17.564C21.8753 17.564 22.1593 17.3594 22.337 17.0285C22.548 16.6332 22.5478 16.2633 22.5476 15.8236L22.5475 15.7768V15.5221C21.7363 15.5221 20.8793 15.7037 20.8793 16.709C20.8793 17.2195 21.1305 17.564 21.5605 17.564ZM25.4908 12.3351V13.1973C25.4902 13.2565 25.5127 13.3133 25.553 13.3545C25.5934 13.3958 25.648 13.4178 25.7043 13.4155H27.6347L25.4213 16.756C25.3202 16.9352 25.2725 17.1421 25.2842 17.35V18.2321C25.2842 18.3594 25.4183 18.5045 25.5464 18.4325C26.7672 17.7671 28.2189 17.7644 29.442 18.4252C29.582 18.5014 29.714 18.3542 29.714 18.2269V17.2999C29.7103 17.1581 29.6345 17.0294 29.5154 16.9627C28.871 16.5817 28.1213 16.47 27.4122 16.4877L29.3228 13.6212C29.5005 13.3644 29.5998 13.2015 29.5998 13.0773V12.3351C29.6004 12.2761 29.5781 12.2195 29.5379 12.1783C29.4978 12.1371 29.4434 12.1149 29.3873 12.1169H25.7003C25.6442 12.1136 25.5893 12.1354 25.5494 12.177C25.5095 12.2186 25.4882 12.276 25.4908 12.3351Z"
      fill="black"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M27.3348 22.4599C27.59 21.7928 28.158 20.298 27.8879 19.9357H27.8899C27.621 19.5727 26.1116 19.7632 25.4327 19.8489L25.4312 19.8491C25.2247 19.8752 25.1929 19.6862 25.3786 19.5495C26.5841 18.659 28.5592 18.9137 28.7886 19.2144C29.018 19.515 28.726 21.5966 27.597 22.5904C27.4232 22.7428 27.2574 22.6613 27.3348 22.4599ZM19.2229 23.4892C21.8484 23.4892 24.9059 22.6175 27.0121 20.9838V20.9869C27.3606 20.7114 27.0617 20.3063 26.7062 20.465C24.4073 21.4844 21.9394 22.0165 19.4443 22.0308C15.9827 22.0308 12.6343 21.0329 9.92535 19.3762C9.68802 19.2311 9.51126 19.4869 9.70986 19.6737C12.3178 22.1473 15.7104 23.508 19.2229 23.4892Z"
      fill="#FF9900"
    />
    <path
      d="M4 1H42V-1H4V1ZM45 4V28H47V4H45ZM42 31H4V33H42V31ZM1 28V4H-1V28H1ZM4 31C2.34315 31 1 29.6569 1 28H-1C-1 30.7614 1.23858 33 4 33V31ZM45 28C45 29.6569 43.6569 31 42 31V33C44.7614 33 47 30.7614 47 28H45ZM42 1C43.6569 1 45 2.34315 45 4H47C47 1.23858 44.7614 -1 42 -1V1ZM4 -1C1.23858 -1 -1 1.23858 -1 4H1C1 2.34315 2.34315 1 4 1V-1Z"
      fill="#F3F2F2"
    />
  </Icon>
);

export default AmazonPayMedium;