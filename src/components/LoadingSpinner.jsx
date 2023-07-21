import React from 'react'

function LoadingSpinner(props) {
  return (
    <div className='flex flex-col items-center justify-items-center'>
        <div>
            <svg className='animate-gear-spin w-full h-full' viewBox="0 0 288 264" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M143.671 247.8C208.68 247.8 261.381 195.099 261.381 130.09C261.381 65.0806 208.68 12.38 143.671 12.38C78.6615 12.38 25.9609 65.0806 25.9609 130.09C25.9609 195.099 78.6615 247.8 143.671 247.8Z" stroke="#31B2EA" stroke-width="2" stroke-miterlimit="10"/>
                <path d="M143.67 228.18C197.844 228.18 241.76 184.264 241.76 130.09C241.76 75.9164 197.844 32 143.67 32C89.4965 32 45.5801 75.9164 45.5801 130.09C45.5801 184.264 89.4965 228.18 143.67 228.18Z" stroke="#31B2EA" stroke-width="2" stroke-miterlimit="10"/>
                <path d="M143.67 208.56C187.008 208.56 222.14 173.428 222.14 130.09C222.14 86.7522 187.008 51.62 143.67 51.62C100.332 51.62 65.2002 86.7522 65.2002 130.09C65.2002 173.428 100.332 208.56 143.67 208.56Z" stroke="#31B2EA" stroke-width="2" stroke-miterlimit="10"/>
                <path d="M143.671 188.95C176.178 188.95 202.531 162.597 202.531 130.09C202.531 97.5825 176.178 71.23 143.671 71.23C111.163 71.23 84.8105 97.5825 84.8105 130.09C84.8105 162.597 111.163 188.95 143.671 188.95Z" stroke="#31B2EA" stroke-width="2" stroke-miterlimit="10"/>
                <path d="M143.671 169.33C165.342 169.33 182.911 151.762 182.911 130.09C182.911 108.418 165.342 90.85 143.671 90.85C121.999 90.85 104.431 108.418 104.431 130.09C104.431 151.762 121.999 169.33 143.671 169.33Z" stroke="#31B2EA" stroke-width="2" stroke-miterlimit="10"/>
                <path d="M155.67 7.59998V28.6C155.67 41.6333 155.647 54.66 155.6 67.68C155.603 68.5164 155.468 69.3476 155.2 70.14C153.55 75.14 149.96 78.14 145.2 79.98C143.769 80.5372 142.262 80.8743 140.73 80.98H139.53C137.871 80.9356 136.275 80.3332 135 79.27C133.884 78.3399 133.102 77.0714 132.772 75.6566C132.441 74.2419 132.581 72.758 133.17 71.43C133.973 69.4737 135.286 67.7681 136.97 66.49C139.687 64.134 143.063 62.6711 146.64 62.3C148.604 62.1261 150.579 62.4423 152.39 63.22C152.603 63.3551 152.848 63.431 153.1 63.44V62.74C153.1 43.8466 153.07 24.9666 153.01 6.09998H155.64" fill="#C5E9FD"/>
                <path d="M85.4207 1.28L95.9307 19.53L115.421 53.41C115.838 54.134 116.135 54.9209 116.301 55.74C117.361 60.87 115.761 65.28 112.581 69.24C111.615 70.4247 110.475 71.4564 109.201 72.3C108.861 72.5 108.541 72.7 108.201 72.89C106.739 73.6763 105.058 73.9542 103.421 73.68C101.988 73.4318 100.675 72.7236 99.681 71.6627C98.6868 70.6017 98.0654 69.2457 97.9107 67.8C97.628 65.7037 97.9111 63.57 98.7307 61.62C99.9073 58.2202 102.104 55.266 105.021 53.16C106.631 52.0283 108.497 51.3137 110.451 51.08C110.702 51.0937 110.952 51.0347 111.171 50.91L110.821 50.31C101.354 33.97 91.8907 17.6367 82.4307 1.31L84.7007 0" fill="#B5E2FB"/>
                <path d="M43.1005 58.53L61.3105 69.04L95.1205 88.64C95.847 89.056 96.4992 89.5899 97.0505 90.22C100.54 94.13 101.35 98.75 100.59 103.77C100.342 105.278 99.8698 106.741 99.1905 108.11C98.9905 108.45 98.8105 108.79 98.6205 109.11C97.7536 110.524 96.4363 111.605 94.8805 112.18C93.5154 112.679 92.0252 112.721 90.6344 112.298C89.2437 111.876 88.0279 111.013 87.1705 109.84C85.8801 108.166 85.0618 106.177 84.8005 104.08C84.1104 100.549 84.5331 96.8906 86.0105 93.61C86.8393 91.8247 88.0966 90.2719 89.6705 89.09C89.8505 88.95 90.1005 88.86 90.2205 88.59L89.6105 88.24L40.4805 60L41.7905 57.72" fill="#A3DCF9"/>
                <path d="M101.88 157.62H101.96L102.56 158.62H102.47C102.273 158.545 102.107 158.405 102 158.223C101.893 158.042 101.851 157.829 101.88 157.62Z" fill="#31B2EA"/>
                <path d="M40.7405 177.79L58.9505 167.28L92.8305 147.79C93.5545 147.373 94.3413 147.075 95.1605 146.91C100.29 145.85 104.7 147.46 108.67 150.63C109.853 151.598 110.884 152.738 111.73 154.01C111.92 154.35 112.12 154.67 112.31 155.01C112.305 155.026 112.305 155.044 112.31 155.06C113.103 156.516 113.381 158.196 113.1 159.83C112.852 161.263 112.144 162.575 111.083 163.57C110.022 164.564 108.666 165.185 107.22 165.34C105.124 165.621 102.991 165.338 101.04 164.52C97.6407 163.343 94.6864 161.147 92.5805 158.23C91.4469 156.621 90.7321 154.755 90.5005 152.8C90.5142 152.549 90.4551 152.299 90.3305 152.08L89.7305 152.43L40.7305 180.82L39.4805 178.53" fill="#82CDF4"/>
                <path d="M71.4104 230.87L81.9204 212.66C88.4604 201.393 94.9937 190.123 101.52 178.85C101.936 178.123 102.47 177.471 103.1 176.92C107.01 173.43 111.63 172.62 116.65 173.38C118.163 173.629 119.629 174.104 121 174.79C121.33 174.98 121.67 175.16 122 175.36C123.417 176.224 124.499 177.542 125.07 179.1C125.572 180.464 125.616 181.954 125.196 183.345C124.775 184.736 123.913 185.952 122.74 186.81C121.061 188.098 119.07 188.919 116.97 189.19C113.438 189.872 109.781 189.446 106.5 187.97C104.715 187.141 103.162 185.884 101.98 184.31C101.85 184.13 101.76 183.88 101.48 183.76L101.13 184.37L72.9304 233.53L70.6504 232.22" fill="#71C6F1"/>
                <path d="M194.331 243.08L183.821 224.88C177.327 213.547 170.834 202.253 164.341 191C163.927 190.274 163.63 189.488 163.461 188.67C162.401 183.53 164.001 179.12 167.171 175.16C168.14 173.975 169.283 172.943 170.561 172.1L171.561 171.51C173.015 170.714 174.697 170.436 176.331 170.72C177.765 170.968 179.079 171.676 180.075 172.736C181.07 173.797 181.694 175.153 181.851 176.6C182.123 178.697 181.837 180.829 181.021 182.78C179.845 186.178 177.653 189.131 174.741 191.24C173.129 192.368 171.264 193.082 169.311 193.32C169.057 193.301 168.803 193.357 168.581 193.48L168.931 194.09L197.331 243.09L195.051 244.4" fill="#49B8ED"/>
                <path d="M243.801 202.53L225.591 192.02L191.781 172.42C191.056 172.001 190.404 171.468 189.851 170.84C186.361 166.93 185.551 162.31 186.311 157.29C186.563 155.781 187.038 154.319 187.721 152.95C187.911 152.61 188.091 152.27 188.291 151.95C189.158 150.536 190.475 149.455 192.031 148.88C193.396 148.381 194.886 148.339 196.277 148.762C197.668 149.184 198.883 150.047 199.741 151.22C201.032 152.894 201.853 154.883 202.121 156.98C202.802 160.512 202.376 164.169 200.901 167.45C200.076 169.238 198.818 170.791 197.241 171.97C197.061 172.11 196.821 172.2 196.691 172.47L197.301 172.82L246.391 201.06L245.081 203.34" fill="#31B2EA"/>
                <path d="M285.761 147.99H264.761L225.681 147.92C224.844 147.923 224.013 147.788 223.221 147.52C218.221 145.88 215.221 142.28 213.381 137.52C212.832 136.09 212.495 134.587 212.381 133.06C212.381 132.67 212.381 132.29 212.381 131.9C212.425 130.241 213.028 128.645 214.091 127.37C215.02 126.252 216.288 125.468 217.702 125.136C219.117 124.804 220.602 124.942 221.931 125.53C223.889 126.334 225.595 127.65 226.871 129.34C229.229 132.056 230.692 135.433 231.061 139.01C231.232 140.969 230.92 142.94 230.151 144.75C230.008 144.96 229.928 145.206 229.921 145.46H230.621L287.261 145.37V148" fill="#31B2EA"/>
                <path d="M217.591 64.53C214.587 67.741 211.232 70.6055 207.591 73.07C207.026 73.4456 206.434 73.7798 205.821 74.07C205.513 74.2325 205.168 74.3085 204.821 74.29C204.911 73.99 205.161 73.89 205.341 73.74C207.791 71.74 210.281 69.82 212.681 67.74C218.121 63.09 220.251 57.05 220.221 50.08C220.205 48.5041 219.865 46.9484 219.221 45.51C218.023 42.609 216.289 39.9595 214.111 37.7C213.601 37.19 213.581 37.21 213.211 37.85C206.251 49.77 199.297 61.6967 192.351 73.63C191.925 74.3497 191.388 74.9977 190.761 75.55C186.831 79.03 182.221 79.84 177.201 79.05C175.692 78.7977 174.23 78.3225 172.861 77.64L171.861 77.06C170.448 76.1871 169.368 74.8672 168.791 73.31C168.297 71.9425 168.26 70.4519 168.686 69.0617C169.111 67.6716 169.976 66.4569 171.151 65.6C172.83 64.3142 174.822 63.4995 176.921 63.24C180.45 62.5839 184.097 63.0345 187.361 64.53C189.147 65.3666 190.699 66.6305 191.881 68.21C192.011 68.39 192.101 68.63 192.381 68.75L192.731 68.14C202.191 51.8067 211.647 35.4733 221.101 19.14L223.371 20.46C223.251 20.64 223.101 20.9 223.011 21.07C221.179 24.1835 220.364 27.7913 220.681 31.39C221.009 34.1491 221.48 36.8894 222.091 39.6C222.893 43.1277 223.309 46.7323 223.331 50.35C223.307 55.638 221.252 60.7148 217.591 64.53Z" fill="#D5F0FF"/>
                <path d="M247.581 113.62C243.337 114.776 238.976 115.447 234.581 115.62C233.913 115.648 233.243 115.618 232.581 115.53C232.223 115.518 231.876 115.403 231.581 115.2C231.794 115.051 232.052 114.981 232.311 115C235.431 114.61 238.571 114.29 241.691 113.82C248.771 112.75 253.771 108.75 257.441 102.82C258.257 101.472 258.787 99.9712 259.001 98.41C259.525 95.3154 259.457 92.1494 258.801 89.08C258.631 88.37 258.611 88.38 257.961 88.72L221.321 108.05C220.582 108.441 219.785 108.707 218.961 108.84C213.791 109.71 209.441 107.96 205.601 104.63C204.455 103.617 203.465 102.441 202.661 101.14L202.121 100.14C201.384 98.6505 201.166 96.9577 201.501 95.33C201.806 93.9095 202.563 92.6262 203.66 91.6724C204.756 90.7187 206.132 90.1459 207.581 90.04C209.688 89.8378 211.81 90.2002 213.731 91.09C217.084 92.3873 219.955 94.6889 221.951 97.68C223.03 99.3299 223.676 101.225 223.831 103.19C223.805 103.439 223.854 103.689 223.971 103.91L224.591 103.58C241.257 94.7267 257.924 85.87 274.591 77.01L275.821 79.34C275.611 79.42 275.361 79.57 275.181 79.66C271.981 81.3365 269.384 83.9686 267.751 87.19C266.564 89.7054 265.512 92.2824 264.601 94.91C263.413 98.3238 261.861 101.599 259.971 104.68C257.133 109.132 252.7 112.331 247.581 113.62Z" fill="#31B2EA"/>
                <path d="M114.041 223.04C114.979 218.751 116.398 214.581 118.27 210.61C118.557 209.995 118.891 209.403 119.27 208.84C119.45 208.545 119.706 208.303 120.011 208.14C120.044 208.398 119.987 208.659 119.851 208.88C118.76 211.88 117.601 214.77 116.581 217.76C114.281 224.53 115.531 230.82 119.111 236.76C119.927 238.105 121.013 239.266 122.301 240.17C124.81 242.056 127.653 243.45 130.681 244.28C131.381 244.46 131.39 244.43 131.38 243.7C131.28 229.893 131.174 216.087 131.061 202.28C131.056 201.445 131.184 200.615 131.441 199.82C133.051 194.82 136.611 191.77 141.331 189.89C142.756 189.339 144.256 189.002 145.781 188.89H146.981C148.639 188.923 150.24 189.507 151.531 190.55C152.653 191.473 153.445 192.735 153.79 194.147C154.134 195.559 154.011 197.044 153.441 198.38C152.659 200.354 151.36 202.081 149.681 203.38C146.987 205.763 143.624 207.257 140.051 207.66C138.088 207.851 136.109 207.552 134.291 206.79C134.079 206.654 133.832 206.581 133.581 206.58V207.28C133.781 226.16 133.981 245.037 134.181 263.91H131.551C131.551 263.69 131.551 263.4 131.551 263.2C131.537 259.585 130.394 256.064 128.281 253.13C126.592 250.921 124.786 248.805 122.871 246.79C120.385 244.166 118.192 241.279 116.331 238.18C113.655 233.613 112.835 228.194 114.041 223.04Z" fill="#5DBFF0"/>
                <path d="M41.1302 100.95C45.4167 101.9 49.5828 103.329 53.5502 105.21C54.1636 105.494 54.7523 105.828 55.3102 106.21C55.6056 106.39 55.8474 106.645 56.0102 106.95C55.7556 106.984 55.4971 106.928 55.2802 106.79C52.2802 105.69 49.3902 104.53 46.4002 103.51C39.6302 101.19 33.3402 102.43 27.4002 105.99C26.0572 106.812 24.8939 107.897 23.9802 109.18C22.073 111.672 20.6609 114.507 19.8202 117.53C19.6402 118.22 19.6602 118.23 20.4002 118.23L61.8202 117.99C62.6555 117.982 63.4864 118.11 64.2802 118.37C69.2802 119.99 72.2802 123.55 74.1902 128.28C74.7409 129.703 75.0779 131.199 75.1902 132.72C75.1902 133.11 75.1902 133.49 75.1902 133.88C75.1682 135.58 74.5647 137.221 73.4802 138.53C72.5545 139.649 71.2913 140.437 69.8798 140.778C68.4683 141.119 66.9844 140.993 65.6502 140.42C63.6766 139.633 61.9501 138.331 60.6502 136.65C58.3019 133.938 56.8459 130.569 56.4802 127C56.2887 125.037 56.5912 123.057 57.3602 121.24C57.4952 121.031 57.5681 120.789 57.5702 120.54H56.8702C37.9902 120.7 19.1136 120.867 0.240234 121.04V118.41C0.48 118.425 0.72047 118.425 0.960236 118.41C4.57428 118.407 8.09631 117.27 11.0302 115.16C13.2399 113.476 15.3595 111.677 17.3802 109.77C20.0103 107.29 22.9004 105.1 26.0002 103.24C30.5649 100.569 35.9797 99.7497 41.1302 100.95Z" fill="#93D5F7"/>
            </svg>
        </div>
        {props.text ? 
        <div className='mt-14 font-primary text-primary text-4xl font-normal'>
            {props.text}
        </div> : null}
        
    </div>
  )
}

export default LoadingSpinner