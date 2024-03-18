import { Outlet } from "react-router-dom"

import { Container, Wrapper } from "./styles"
import { useTheme } from "../../contexts/ThemeContext"
import { Items } from "./components/Item"

export function Nav() {
  const { theme } = useTheme()
  return (
    <Container>
      <Wrapper>
        <div>
          <svg
            className="logo"
            viewBox="0 0 79 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clipPath="url(#clip0_59_1049)">
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M17.8313 11.3993C15.4976 11.3993 13.5986 9.42575 13.5986 7.00044C13.5986 4.57513 15.4976 2.60156 17.8313 2.60156C20.165 2.60156 22.064 4.57513 22.064 7.00044C22.064 9.42575 20.165 11.3993 17.8313 11.3993ZM17.8313 4.41654C16.461 4.41654 15.3466 5.57473 15.3466 6.99884C15.3466 8.42295 16.461 9.58114 17.8313 9.58114C19.2016 9.58114 20.3161 8.42295 20.3161 6.99884C20.3161 5.57473 19.2016 4.41654 17.8313 4.41654Z"
                fill={theme.colors.primary}
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M11.2597 11.1557H9.51172V6.66395C9.51172 4.42286 11.2658 2.59827 13.4238 2.59827V4.41485C12.2308 4.41485 11.2597 5.42406 11.2597 6.66395V11.1557Z"
                fill={theme.colors.primary}
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M33.8199 2.7793L31.6912 8.6119L29.5625 2.7793H27.7052L25.5765 8.6119L23.4463 2.7793H21.5889L24.647 11.1557H26.5044L28.6331 5.32315L30.7618 11.1557H32.6191L35.6773 2.7793H33.8199Z"
                fill={theme.colors.primary}
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M7.16136 3.83016C7.9521 3.20541 8.46693 2.22022 8.46693 1.11169H6.71898C6.71898 1.99435 6.02843 2.71201 5.17912 2.71201V2.71522C4.87392 2.64313 4.55947 2.59988 4.23269 2.59988C1.89901 2.59988 0 4.57345 0 6.99876C0 9.42407 1.89901 11.3976 4.23269 11.3976C5.08817 11.3976 5.88354 11.1301 6.55096 10.6752C6.65732 10.9619 6.71744 11.2727 6.71744 11.5995C6.71744 13.0236 5.603 14.1818 4.23269 14.1818C2.86239 14.1818 1.74795 13.0236 1.74795 11.5995H0C0 14.0248 1.89901 15.9984 4.23269 15.9984C6.56638 15.9984 8.46539 14.0248 8.46539 11.5995C8.46539 10.7553 8.23109 9.97033 7.83341 9.30072C8.23264 8.62952 8.46539 7.84297 8.46539 6.99876C8.46539 5.75407 7.96289 4.62952 7.15982 3.82855L7.16136 3.83016ZM4.23269 9.58266C2.86239 9.58266 1.74795 8.42447 1.74795 7.00036C1.74795 5.57625 2.86239 4.41806 4.23269 4.41806C5.603 4.41806 6.71744 5.57625 6.71744 7.00036C6.71744 8.42447 5.603 9.58266 4.23269 9.58266Z"
                fill={theme.colors.primary}
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M41.3513 4.59591V2.77934H38.287V0H36.5391V7.09171C36.5391 9.3328 38.2916 11.1558 40.4481 11.1574H41.3529V9.34081H40.4511C39.2581 9.34081 38.287 8.3316 38.287 7.09171V4.59591H41.3513Z"
                fill="#FF8533"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M78.9998 4.59591V2.77934H75.9355V0H74.1875V7.09171C74.1875 9.3328 75.9401 11.1558 78.0965 11.1574H79.0013V9.34081H78.0996C76.9065 9.34081 75.9355 8.3316 75.9355 7.09171V4.59591H78.9998Z"
                fill="#FF8533"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M54.4424 2.7793L52.3137 8.6119L50.185 2.7793H48.3276L46.199 8.6119L44.0703 2.7793H42.2129L45.271 11.1557H47.1284L49.2571 5.32315L51.3858 11.1557H53.2432L56.2998 2.7793H54.4424Z"
                fill="#FF8533"
              />
              <path
                d="M62.5931 7.83664C62.2571 8.85066 61.3322 9.58274 60.244 9.58274C59.6074 9.58274 59.0294 9.33124 58.5885 8.92115L61.434 7.3801L64.3164 5.81822C63.817 3.9664 62.1831 2.60156 60.2425 2.60156C57.9088 2.60156 56.0098 4.57513 56.0098 7.00044C56.0098 9.42575 57.9088 11.3993 60.2425 11.3993C62.3018 11.3993 64.0189 9.86308 64.3965 7.83664H62.5916H62.5931ZM57.7593 6.99884C57.7593 5.57473 58.8737 4.41654 60.244 4.41654C60.8806 4.41654 61.4586 4.66804 61.8995 5.07813L57.7793 7.31121C57.767 7.20869 57.7593 7.10617 57.7593 7.00044V6.99884Z"
                fill="#FF8533"
              />
              <path
                d="M71.6566 7.83664C71.3205 8.85066 70.3957 9.58274 69.3075 9.58274C68.6709 9.58274 68.0928 9.33124 67.652 8.92115L70.4974 7.3801L73.3799 5.81822C72.8804 3.9664 71.2466 2.60156 69.3059 2.60156C66.9722 2.60156 65.0732 4.57513 65.0732 7.00044C65.0732 9.42575 66.9722 11.3993 69.3059 11.3993C71.3652 11.3993 73.0824 9.86308 73.46 7.83664H71.655H71.6566ZM66.8227 6.99884C66.8227 5.57473 67.9372 4.41654 69.3075 4.41654C69.9441 4.41654 70.5221 4.66804 70.9629 5.07813L66.8428 7.31121C66.8304 7.20869 66.8227 7.10617 66.8227 7.00044V6.99884Z"
                fill="#FF8533"
              />
            </g>
            <defs>
              <clipPath id="clip0_59_1049">
                <rect width="79" height="16" fill="white" />
              </clipPath>
            </defs>
          </svg>

          <svg
            className="logo-small"
            viewBox="0 0 320 284"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M194.54 141.898V242.356L294.998 141.898L194.54 41.4395V141.898Z"
              stroke={theme.colors.primary}
              strokeWidth="34"
            />
            <path
              d="M170.351 41.2836L169.291 110.934L261.568 203.211L296.923 167.856L170.351 41.2836Z"
              fill={theme.colors.secondary}
            />
            <path
              d="M124.54 141.898V242.356L24.0812 141.898L124.54 41.4394V141.898Z"
              stroke="#FF8533"
              strokeWidth="34"
            />
            <path
              d="M142.033 47.9816L150.097 110.857L93.7821 167.171L58.3125 131.702L142.033 47.9816Z"
              fill={theme.colors.secondary}
            />
            <path
              d="M211.54 184.5L247.968 161.697L275.545 189.274L211.54 254L211.54 184.5Z"
              fill={theme.colors.secondary}
            />
          </svg>

          <Items />
        </div>
      </Wrapper>

      <Outlet />
    </Container>
  )
}
