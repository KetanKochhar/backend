function getpolo(color = "white", color1 = "white" , stroke="black"){
    const poloFrontSVG = `<svg width="540" height="530" viewBox="0 0 540 530" fill="none" xmlns="http://www.w3.org/2000/svg"> <rect width="915" height="821" fill="none"/> <line y1="-0.5" x2="125.485" y2="-0.5" transform="matrix(0.233143 0.972442 0.971048 -0.238883 2903.91 20.3065)" stroke="${stroke}" stroke-dasharray="2 2"/> <path d="M220.336 33.0898L217.458 33.8827L218.744 36.5764C223.579 46.7105 227.975 54.3102 233.47 61.1508C238.964 67.9912 245.483 73.98 254.464 80.9726L255.142 81.5H256H272H272.883L273.57 80.9452C282.282 73.9122 288.582 67.8755 293.968 61.0294C299.348 54.1896 303.749 46.6261 308.738 36.615L310.116 33.8484L307.123 33.0787C289.442 28.533 275.759 26.297 262.442 26.3361C249.116 26.3753 236.293 28.6922 220.336 33.0898Z" fill="${color1}" stroke="${stroke}" stroke-width="5"/> <path d="M112.046 65.189L114.902 64.0109L115.459 67.0489C121.179 98.2291 124.408 123.376 123.643 148.02C122.877 172.697 118.111 196.762 107.966 225.824L107.364 227.55L105.537 227.499L33.0699 225.495L31.162 225.443L30.7101 223.588L3.57113 112.242L3.06303 110.157L5.04647 109.339L112.046 65.189Z" fill="${color}" stroke="#060606" stroke-width="5"/> <path d="M411.138 59.688L408.262 58.5048L407.725 61.5678C396.315 126.577 404.361 165.78 424.402 225.792L424.98 227.523L426.805 227.5L497.151 226.611L499.11 226.586L499.554 224.679L526.435 109.393L526.917 107.322L524.951 106.513L411.138 59.688Z" fill="${color}" stroke="${stroke}" stroke-width="5"/> <path d="M111.883 64.9216L110.22 65.7212L110.494 67.5457C116.462 107.306 117.629 135.116 115.384 158.736C113.14 182.342 107.479 201.887 99.631 225.169L99.5 225.557V225.967V504V505.691L101.069 506.32C167.633 533.014 219.204 546.502 269.795 546.521C320.402 546.54 369.789 533.081 431.989 506.296L433.5 505.645V504V225.967V225.52L433.345 225.1C413.52 171.513 411.981 133.392 423.076 67.5903L423.395 65.6941L421.645 64.8986L342.034 28.724L339.076 27.3796L338.535 30.584C334.959 51.7701 329.478 63.3781 318.993 70.4958C308.284 77.7648 291.931 80.6966 265.468 82.9934C236.699 81.243 219.992 77.5789 209.496 69.8682C199.145 62.2642 194.385 50.3679 190.651 30.5373L190.048 27.3346L187.111 28.747L111.883 64.9216Z" fill="${color}" stroke="${stroke}" stroke-width="5"/> <line y1="-0.5" x2="123.656" y2="-0.5" transform="matrix(-0.231952 0.972727 -0.971347 -0.237666 512.527 106.05)" stroke="${stroke}" stroke-dasharray="2 2"/> <line y1="-0.5" x2="125.485" y2="-0.5" transform="matrix(-0.233143 0.972442 -0.971048 -0.238883 508.512 104.306)" stroke="${stroke}" stroke-dasharray="2 2"/> <line y1="-0.5" x2="123.656" y2="-0.5" transform="matrix(0.231952 0.972727 0.971347 -0.237666 16.8992 106.05)" stroke="${stroke}" stroke-dasharray="2 2"/> <line y1="-0.5" x2="125.485" y2="-0.5" transform="matrix(0.233143 0.972442 0.971048 -0.238883 20.9148 104.306)" stroke="${stroke}" stroke-dasharray="2 2"/> <rect x="259.5" y="82.5" width="10" height="91" fill="${color}" stroke="${stroke}" stroke-width="5"/> <path d="M188.102 29.373L187.27 30.3433L187.57 31.5856C198.28 76.039 206.434 96.859 227.422 113.939L229.377 115.53L230.952 113.562L256.952 81.0617L258.511 79.1131L256.565 77.5507C243.786 67.2887 235.711 59.531 229.105 49.7587C222.476 39.9499 217.237 27.9812 210.348 9.14143L208.881 5.1304L206.102 8.37302L188.102 29.373ZM341.43 31.5856L341.725 30.3645L340.921 29.3995L323.421 8.39954L320.642 5.06575L319.152 9.14143C312.268 27.9672 306.907 39.9347 300.156 49.7412C293.426 59.5198 285.223 67.2815 272.435 77.5507L270.489 79.1131L272.048 81.0617L298.048 113.562L299.623 115.53L301.578 113.939C322.566 96.859 330.72 76.039 341.43 31.5856Z" fill="${color}" stroke="${stroke}" stroke-width="5"/> <path d="M211.061 2.70407C252.947 7.66005 277.045 7.51365 317.333 2.80795C313.975 13.6653 311.296 20.6044 306.111 31.5959C286.886 27.0341 272.614 25.1333 259.571 25.3545C246.737 25.5721 235.216 27.8428 221.492 31.5076C217.282 21.0072 214.73 14.4144 210.692 3.56565L211.061 2.70407Z" fill="${color}" stroke="${stroke}" stroke-width="5"/> </svg> `;

    const poloBackSVG = `<svg width="540" height="530" viewBox="0 0 540 530" fill="none" xmlns="http://www.w3.org/2000/svg"> <rect width="915" height="820" fill="none"/> <path d="M112.046 59.689L114.902 58.5109L115.459 61.5489C121.179 92.7291 124.408 117.876 123.643 142.52C122.877 167.197 118.111 191.262 107.966 220.324L107.364 222.05L105.537 221.999L33.0699 219.995L31.162 219.943L30.7101 218.088L3.57113 106.742L3.06303 104.657L5.04647 103.839L112.046 59.689Z" fill="${color}" stroke="#060606" stroke-width="5"/> <line y1="-0.5" x2="123.656" y2="-0.5" transform="matrix(0.231952 0.972727 0.971347 -0.237666 16.8992 100.55)" stroke="${stroke}" stroke-dasharray="2 2"/> <line y1="-0.5" x2="125.485" y2="-0.5" transform="matrix(0.233143 0.972442 0.971048 -0.238883 20.9148 98.8065)" stroke="${stroke}" stroke-dasharray="2 2"/> <path d="M411.138 54.2613L408.262 53.078L407.725 56.1411C396.315 121.15 404.361 160.353 424.402 220.365L424.98 222.096L426.805 222.073L497.151 221.184L499.11 221.159L499.554 219.252L526.435 103.966L526.917 101.896L524.951 101.087L411.138 54.2613Z" fill="${color}" stroke="${stroke}" stroke-width="5"/> <path d="M111.883 59.5998L110.22 60.3994L110.494 62.2239C116.462 101.984 117.629 129.794 115.384 153.415C113.14 177.021 107.479 196.565 99.631 219.847L99.5 220.236V220.646V498.678V500.369L101.069 500.998C167.633 527.692 219.204 541.18 269.795 541.199C320.402 541.218 369.789 527.759 431.989 500.974L433.5 500.323V498.678V220.646V220.198L433.345 219.778C413.52 166.192 411.981 128.07 423.076 62.2685L423.392 60.39L421.665 59.5862L341.555 22.3067L340.928 22.0148L340.24 22.0869C319.187 24.2923 311.455 25.2165 306.364 25.825C298.746 26.7355 297.043 26.9392 265.468 29.6717C238.267 28.0207 227.682 25.9253 220.228 24.4496C219.849 24.3745 219.477 24.3009 219.112 24.2291C211.22 22.6776 206.098 21.922 188.02 23.1843L187.542 23.2176L187.111 23.4252L111.883 59.5998Z" fill="${color}" stroke="${stroke}" stroke-width="5"/> <line y1="-0.5" x2="123.656" y2="-0.5" transform="matrix(-0.231952 0.972727 -0.971347 -0.237666 512.527 100.623)" stroke="${stroke}" stroke-dasharray="2 2"/> <line y1="-0.5" x2="125.485" y2="-0.5" transform="matrix(-0.233143 0.972442 -0.971048 -0.238883 508.512 98.8797)" stroke="${stroke}" stroke-dasharray="2 2"/> <line y1="-0.5" x2="125.485" y2="-0.5" transform="matrix(0.233143 0.972442 0.971048 -0.238883 2316.91 17.3065)" stroke="${stroke}" stroke-dasharray="2 2"/> <path d="M205.797 2.50873H204.605L203.855 3.43462L188.868 21.9259L186.892 24.3649L189.711 25.7454C206.811 34.1168 236.006 38.5497 264.92 38.609C293.809 38.6682 323.179 34.3645 340.529 24.6831L343.925 22.7879L340.791 20.4852L316.98 2.99394L316.32 2.50873H315.5H205.797Z" fill="${color}" stroke="${stroke}" stroke-width="5"/> </svg> `;
    return [poloFrontSVG , poloBackSVG]
}
function getcotton(color = "white", color1 = "white" ,stroke="black"){
    const cottonFrontSVG = `<svg width="915" height="821" viewBox="0 0 915 821" fill="none" xmlns="http://www.w3.org/2000/svg"> <rect width="915" height="821" fill="none"/> <path id="Rectangle 6" d="M192.577 61.6767L195.413 60.5496L195.96 63.5526C205.862 117.994 210.877 161.117 209.006 203.317C207.133 245.541 198.373 286.722 180.863 337.318L180.263 339.05L178.43 338.999L52.9303 335.499L51.0191 335.446L50.57 333.587L3.56998 139.087L3.06027 136.978L5.0769 136.177L192.577 61.6767Z" fill="${color}" stroke="${stroke}" stroke-width="5"/> <path id="Rectangle 5" d="M710.923 56.1764L708.087 55.0505L707.54 58.0526C687.656 167.37 701.649 233.222 736.638 334.318L737.227 336.022L739.031 336L862.031 334.5L863.974 334.476L864.43 332.587L911.43 138.087L911.94 135.977L909.923 135.176L710.923 56.1764Z" fill="${color}" stroke="${stroke}" stroke-width="5"/> <rect id="Rectangle 4" x="346" y="40.5" width="235" height="83" fill="${color1}"/> <path id="Rectangle 2" d="M337.962 7.06376L337.423 4.02145L334.56 5.18358L284.06 25.6836L281.08 26.8933L282.987 29.4827L454.987 262.983L456.985 265.695L459.002 262.997L634.002 28.9973L635.956 26.3841L632.925 25.1773L581.425 4.67726L578.651 3.57299L578.051 6.49801C569.885 46.3367 553.864 73.6483 532.905 91.0124C511.949 108.375 485.804 116 457 116C428.208 116 401.941 108.131 381.169 90.7095C360.402 73.2916 344.883 46.1208 337.962 7.06376Z" fill="${color}" stroke="${stroke}" stroke-width="5"/> <path id="Rectangle 1" d="M191.086 62.1721L189.23 62.9013L189.528 64.8729C199.88 133.312 201.92 181.278 198.011 222.082C194.104 262.872 184.244 296.627 170.633 336.695L170.5 337.086V337.499V815.499V817.999H173H743H745.5V815.499V337.499V337.048L745.343 336.626C710.859 244.134 708.205 178.266 727.465 64.9178L727.804 62.9245L725.925 62.1764L612.925 17.1764L610.054 16.033L609.536 19.0799C603.358 55.4039 588.498 86.271 564.006 109.027C539.551 131.749 505.296 146.57 459.968 150.494C410.546 147.495 375.448 131.686 351.104 108.382C326.705 85.0243 312.889 53.9266 306.456 20.0329L305.894 17.0691L303.086 18.1721L191.086 62.1721Z" fill="${color}" stroke="${stroke}" stroke-width="5"/> <path id="Rectangle 3" d="M342.692 6.0975L340.203 5.38135L339.575 7.89366C338.649 11.5964 339.468 16.7985 341.156 22.8019C342.884 28.9441 345.678 36.426 349.189 44.9519L349.664 46.1059L350.872 46.4197C393.93 57.6037 426.542 63.0269 458.794 62.9842C491.043 62.9415 522.793 57.4333 564.116 46.9229L565.28 46.627L565.776 45.5345C568.334 39.9069 570.997 32.5445 573.022 25.7102C575.019 18.9717 576.5 12.4042 576.5 8.5V5.10577L573.259 6.11249C527.077 20.4554 494.066 27.4795 460.362 27.4423C426.64 27.4051 392.047 20.3001 342.692 6.0975Z" fill="${color1}" stroke="${stroke}" stroke-width="5"/> <line id="Line 1" x1="889.486" y1="129.617" x2="839.486" y2="336.617" stroke="${stroke}" stroke-dasharray="2 2"/> <line id="Li0ne 2" x1="882.486" y1="126.618" x2="831.486" y2="336.618" stroke="${stroke}" stroke-dasharray="2 2"/> <line id="Line 3" y1="-0.5" x2="212.953" y2="-0.5" transform="matrix(0.234794 0.972045 0.972045 -0.234794 25.0001 129.5)" stroke="${stroke}" stroke-dasharray="2 2"/> <line id="Line 4" y1="-0.5" x2="216.104" y2="-0.5" transform="matrix(0.235997 0.971754 0.971754 -0.235997 32.0001 126.5)" stroke="${stroke}" stroke-dasharray="2 2"/> <line id="Line 5" x1="173" y1="770" x2="746" y2="770" stroke="${stroke}" stroke-dasharray="2 2"/> <line id="Line 6" x1="170" y1="782" x2="743" y2="782" stroke="${stroke}" stroke-dasharray="2 2"/> </svg>`;

    const cottonBackSVG = tshirtBackSVG = `<svg width="915" height="820" viewBox="0 0 915 820" fill="none" xmlns="http://www.w3.org/2000/svg"> <rect width="915" height="820" fill="none"/> <path id="Rectangle 10" d="M336.563 4.23718L335.573 3.77224L334.56 4.18358L284.06 24.6836L281.08 25.8933L282.987 28.4827L454.987 261.983L456.985 264.695L459.002 261.997L634.002 27.9973L635.956 25.3841L632.925 24.1773L581.425 3.67726L580.318 3.2367L579.279 3.81873C560.657 14.2468 544.627 21.2631 526.045 25.6932C507.438 30.1294 486.155 32 457 32C398.996 32 369.371 19.6471 336.563 4.23718Z" fill="${color}" stroke="${stroke}" stroke-width="5"/> <path id="Rectangle 7" d="M192.577 60.6767L195.413 59.5496L195.96 62.5526C205.862 116.994 210.877 160.117 209.006 202.317C207.133 244.541 198.373 285.722 180.863 336.318L180.263 338.05L178.43 337.999L52.9302 334.499L51.019 334.446L50.5699 332.587L3.56985 138.087L3.06015 135.978L5.07678 135.177L192.577 60.6767Z" fill="${color}" stroke="${stroke}" stroke-width="5"/> <path id="Rectangle 8" d="M710.922 55.1764L708.086 54.0505L707.54 57.0526C687.656 166.37 701.649 232.222 736.637 333.318L737.227 335.022L739.03 335L862.03 333.5L863.974 333.476L864.43 331.587L911.43 137.087L911.94 134.977L909.922 134.176L710.922 55.1764Z" fill="${color}" stroke="${stroke}" stroke-width="5"/> <path id="Rectangle 11" d="M191.086 61.1721L189.23 61.9013L189.528 63.8729C199.88 132.312 201.92 180.278 198.011 221.082C194.104 261.872 184.243 295.627 170.633 335.695L170.5 336.086V336.499V814.499V816.999H173H743H745.5V814.499V336.499V336.048L745.342 335.626C710.859 243.134 708.205 177.266 727.465 63.9178L727.803 61.9245L725.925 61.1764L612.925 16.1764L611.396 15.5675L610.232 16.7313C572.456 54.5081 527.327 63.496 461.007 67.495C415.651 64.4984 385.58 59.8906 362.484 52.1301C339.453 44.3917 323.243 33.4799 305.674 17.6421L304.525 16.6067L303.086 17.1721L191.086 61.1721Z" fill="${color}" stroke="${stroke}" stroke-width="5"/> <line id="Line 7" x1="889.486" y1="128.617" x2="839.486" y2="335.617" stroke="${stroke}" stroke-dasharray="2 2"/> <line id="Line 8" x1="882.486" y1="125.618" x2="831.486" y2="335.618" stroke="${stroke}" stroke-dasharray="2 2"/> <line id="Line 9" y1="-0.5" x2="212.953" y2="-0.5" transform="matrix(0.234794 0.972045 0.972045 -0.234794 25.0001 128.5)" stroke="${stroke}" stroke-dasharray="2 2"/> <line id="Line 10" y1="-0.5" x2="216.104" y2="-0.5" transform="matrix(0.235997 0.971754 0.971754 -0.235997 32.0001 125.5)" stroke="${stroke}" stroke-dasharray="2 2"/> <line id="Line 11" x1="173" y1="769" x2="746" y2="769" stroke="${stroke}" stroke-dasharray="2 2"/> <line id="Line 12" x1="170" y1="781" x2="743" y2="781" stroke="#${stroke}" stroke-dasharray="2 2"/> <path id="Line 13" d="M312 16.5C366 72 542.5 78.5 605 14.5" stroke="${stroke}" stroke-dasharray="2 2"/> </svg>`;
    return [cottonFrontSVG , cottonBackSVG]
}
function getsports(color = "white", color1 = "white" , stroke="black"){
    const sportsFrontSVG = `<svg width="915" height="821" viewBox="0 0 915 821" fill="none" xmlns="http://www.w3.org/2000/svg"> <rect width="915" height="821" fill="none"/> <path id="Rectangle 6" d="M192.577 61.6767L195.413 60.5496L195.96 63.5526C205.862 117.994 210.877 161.117 209.006 203.317C207.133 245.541 198.373 286.722 180.863 337.318L180.263 339.05L178.43 338.999L52.9303 335.499L51.0191 335.446L50.57 333.587L3.56998 139.087L3.06027 136.978L5.0769 136.177L192.577 61.6767Z" fill="${color}" stroke="${stroke}" stroke-width="5"/> <path id="Rectangle 5" d="M710.923 56.1764L708.087 55.0505L707.54 58.0526C687.656 167.37 701.649 233.222 736.638 334.318L737.227 336.022L739.031 336L862.031 334.5L863.974 334.476L864.43 332.587L911.43 138.087L911.94 135.977L909.923 135.176L710.923 56.1764Z" fill="${color}" stroke="${stroke}" stroke-width="5"/> <rect id="Rectangle 4" x="346" y="40.5" width="235" height="83" fill="${color1}"/> <path id="Rectangle 2" d="M337.962 7.06376L337.423 4.02145L334.56 5.18358L284.06 25.6836L281.08 26.8933L282.987 29.4827L454.987 262.983L456.985 265.695L459.002 262.997L634.002 28.9973L635.956 26.3841L632.925 25.1773L581.425 4.67726L578.651 3.57299L578.051 6.49801C569.885 46.3367 553.864 73.6483 532.905 91.0124C511.949 108.375 485.804 116 457 116C428.208 116 401.941 108.131 381.169 90.7095C360.402 73.2916 344.883 46.1208 337.962 7.06376Z" fill="${color}" stroke="${stroke}" stroke-width="5"/> <path id="Rectangle 1" d="M191.086 62.1721L189.23 62.9013L189.528 64.8729C199.88 133.312 201.92 181.278 198.011 222.082C194.104 262.872 184.244 296.627 170.633 336.695L170.5 337.086V337.499V815.499V817.999H173H743H745.5V815.499V337.499V337.048L745.343 336.626C710.859 244.134 708.205 178.266 727.465 64.9178L727.804 62.9245L725.925 62.1764L612.925 17.1764L610.054 16.033L609.536 19.0799C603.358 55.4039 588.498 86.271 564.006 109.027C539.551 131.749 505.296 146.57 459.968 150.494C410.546 147.495 375.448 131.686 351.104 108.382C326.705 85.0243 312.889 53.9266 306.456 20.0329L305.894 17.0691L303.086 18.1721L191.086 62.1721Z" fill="${color}" stroke="${stroke}" stroke-width="5"/> <path id="Rectangle 3" d="M342.692 6.0975L340.203 5.38135L339.575 7.89366C338.649 11.5964 339.468 16.7985 341.156 22.8019C342.884 28.9441 345.678 36.426 349.189 44.9519L349.664 46.1059L350.872 46.4197C393.93 57.6037 426.542 63.0269 458.794 62.9842C491.043 62.9415 522.793 57.4333 564.116 46.9229L565.28 46.627L565.776 45.5345C568.334 39.9069 570.997 32.5445 573.022 25.7102C575.019 18.9717 576.5 12.4042 576.5 8.5V5.10577L573.259 6.11249C527.077 20.4554 494.066 27.4795 460.362 27.4423C426.64 27.4051 392.047 20.3001 342.692 6.0975Z" fill="${color1}" stroke="${stroke}" stroke-width="5"/> <line id="Line 1" x1="889.486" y1="129.617" x2="839.486" y2="336.617" stroke="${stroke}" stroke-dasharray="2 2"/> <line id="Li0ne 2" x1="882.486" y1="126.618" x2="831.486" y2="336.618" stroke="${stroke}" stroke-dasharray="2 2"/> <line id="Line 3" y1="-0.5" x2="212.953" y2="-0.5" transform="matrix(0.234794 0.972045 0.972045 -0.234794 25.0001 129.5)" stroke="${stroke}" stroke-dasharray="2 2"/> <line id="Line 4" y1="-0.5" x2="216.104" y2="-0.5" transform="matrix(0.235997 0.971754 0.971754 -0.235997 32.0001 126.5)" stroke="${stroke}" stroke-dasharray="2 2"/> <line id="Line 5" x1="173" y1="770" x2="746" y2="770" stroke="${stroke}" stroke-dasharray="2 2"/> <line id="Line 6" x1="170" y1="782" x2="743" y2="782" stroke="${stroke}" stroke-dasharray="2 2"/> </svg>`;

    const sportsBackSVG = tshirtBackSVG = `<svg width="915" height="820" viewBox="0 0 915 820" fill="none" xmlns="http://www.w3.org/2000/svg"> <rect width="915" height="820" fill="none"/> <path id="Rectangle 10" d="M336.563 4.23718L335.573 3.77224L334.56 4.18358L284.06 24.6836L281.08 25.8933L282.987 28.4827L454.987 261.983L456.985 264.695L459.002 261.997L634.002 27.9973L635.956 25.3841L632.925 24.1773L581.425 3.67726L580.318 3.2367L579.279 3.81873C560.657 14.2468 544.627 21.2631 526.045 25.6932C507.438 30.1294 486.155 32 457 32C398.996 32 369.371 19.6471 336.563 4.23718Z" fill="${color}" stroke="${stroke}" stroke-width="5"/> <path id="Rectangle 7" d="M192.577 60.6767L195.413 59.5496L195.96 62.5526C205.862 116.994 210.877 160.117 209.006 202.317C207.133 244.541 198.373 285.722 180.863 336.318L180.263 338.05L178.43 337.999L52.9302 334.499L51.019 334.446L50.5699 332.587L3.56985 138.087L3.06015 135.978L5.07678 135.177L192.577 60.6767Z" fill="${color}" stroke="${stroke}" stroke-width="5"/> <path id="Rectangle 8" d="M710.922 55.1764L708.086 54.0505L707.54 57.0526C687.656 166.37 701.649 232.222 736.637 333.318L737.227 335.022L739.03 335L862.03 333.5L863.974 333.476L864.43 331.587L911.43 137.087L911.94 134.977L909.922 134.176L710.922 55.1764Z" fill="${color}" stroke="${stroke}" stroke-width="5"/> <path id="Rectangle 11" d="M191.086 61.1721L189.23 61.9013L189.528 63.8729C199.88 132.312 201.92 180.278 198.011 221.082C194.104 261.872 184.243 295.627 170.633 335.695L170.5 336.086V336.499V814.499V816.999H173H743H745.5V814.499V336.499V336.048L745.342 335.626C710.859 243.134 708.205 177.266 727.465 63.9178L727.803 61.9245L725.925 61.1764L612.925 16.1764L611.396 15.5675L610.232 16.7313C572.456 54.5081 527.327 63.496 461.007 67.495C415.651 64.4984 385.58 59.8906 362.484 52.1301C339.453 44.3917 323.243 33.4799 305.674 17.6421L304.525 16.6067L303.086 17.1721L191.086 61.1721Z" fill="${color}" stroke="${stroke}" stroke-width="5"/> <line id="Line 7" x1="889.486" y1="128.617" x2="839.486" y2="335.617" stroke="${stroke}" stroke-dasharray="2 2"/> <line id="Line 8" x1="882.486" y1="125.618" x2="831.486" y2="335.618" stroke="${stroke}" stroke-dasharray="2 2"/> <line id="Line 9" y1="-0.5" x2="212.953" y2="-0.5" transform="matrix(0.234794 0.972045 0.972045 -0.234794 25.0001 128.5)" stroke="${stroke}" stroke-dasharray="2 2"/> <line id="Line 10" y1="-0.5" x2="216.104" y2="-0.5" transform="matrix(0.235997 0.971754 0.971754 -0.235997 32.0001 125.5)" stroke="${stroke}" stroke-dasharray="2 2"/> <line id="Line 11" x1="173" y1="769" x2="746" y2="769" stroke="${stroke}" stroke-dasharray="2 2"/> <line id="Line 12" x1="170" y1="781" x2="743" y2="781" stroke="${stroke}" stroke-dasharray="2 2"/> <path id="Line 13" d="M312 16.5C366 72 542.5 78.5 605 14.5" stroke="${stroke}" stroke-dasharray="2 2"/> </svg>`;
    return [sportsFrontSVG , sportsBackSVG]
}
currentTshirtColor = "white";
currentTshirtColor1 = "white";
document.addEventListener('DOMContentLoaded', function () {
    // Initialize the canvas using Fabric.js
    const canvas = new fabric.Canvas('tshirtCanvas', {
        backgroundColor: 'rgba(181, 191, 161, 0.4)', // 0.5 is 50% opacity  
        preserveObjectStacking: true,
    });
    
    function checktype() {
        const type = sessionStorage.getItem("type")
        if  (type=="polo"){
            const [front , back] = getpolo();
            tshirtFrontSVG = front;
            tshirtBackSVG = back;
            return type;
        }
        else if(type == "cotton"){
            const [front , back] = getcotton();
            tshirtFrontSVG = front;
            tshirtBackSVG = back;
            tshirtFrontSVG = front;
            tshirtBackSVG = back;
            return type;
        }
        else if(type == "sports"){
            const [front , back] = getsports();
            tshirtFrontSVG = front;
            tshirtBackSVG = back;
            tshirtFrontSVG = front;
            tshirtBackSVG = back;
            return type;
        }
        else{
            return "An error occured"
        }
    }
    const type = checktype();
    checktype() 
    const functionmap = {"polo":getpolo , "cotton":getcotton , "sports":getsports}
    const colorOptions = document.querySelectorAll('.color-option');
    
    colorOptions.forEach(option => {
        option.addEventListener('click', () => {
            // Remove 'selected' class from all options
            colorOptions.forEach(opt => opt.classList.remove('selected'));
            
            // Mark clicked option as selected
            option.classList.add('selected');
            
            // Update the global variable
            currentTshirtColor = option.getAttribute('data-color');
            currentTshirtColor1 = option.getAttribute('data-color1');


            if (currentTshirtColor == "#000000") {
                // console.log("this is s black color");
                a = functionmap[type];
                const [front , back] = a(currentTshirtColor,currentTshirtColor1, '#777777')
                tshirtFrontSVG = front;
                tshirtBackSVG = back;
                clothName = document.querySelector('.view-button.active').id;

                clothingImages = {
                    tshirtFront: 'data:image/svg+xml;base64,' + btoa(tshirtFrontSVG),
                    tshirtBack: 'data:image/svg+xml;base64,' + btoa(tshirtBackSVG)
                };

                loadClothing(clothName);
                closePanel('colorPanel');
            }
            else {
                a = functionmap[type];
                const [front , back] = a(currentTshirtColor,currentTshirtColor1)
                tshirtFrontSVG = front;
                tshirtBackSVG = back;
                clothName = document.querySelector('.view-button.active').id;

                clothingImages = {
                    tshirtFront: 'data:image/svg+xml;base64,' + btoa(tshirtFrontSVG),
                    tshirtBack: 'data:image/svg+xml;base64,' + btoa(tshirtBackSVG)
                };

                loadClothing(clothName);
                closePanel('colorPanel');
            }
        });
    });


    let clothingImages = {
        tshirtFront: 'data:image/svg+xml;base64,' + btoa(tshirtFrontSVG),
        tshirtBack: 'data:image/svg+xml;base64,' + btoa(tshirtBackSVG)
    };

    let currentClothing = null;
    let tshirtBorder = null;
    const zoomFactor = 0.2;
    const zoomFactorForTouchPad = 0.05;
    const zoomFactorForMouse = 0.08;


    const objectsBySide = {
        tshirtFront: [],
        tshirtBack: []
    };


    const canvasStates = {
        designNumber: sessionStorage.getItem("designID"),
        tshirtFront: { json: null, preview: null },
        tshirtBack: { json: null, preview: null }
    };
    fetch("/fetch-design", {
        method: "POST",
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          did: canvasStates.designNumber
        })
      })
      .then(res => res.json())
      .then(data => {
        console.log('Fetched Design:', data[0].id);
        console.log('Fetched Design:', data[0].color);
        
        // Parse the front and back canvas JSON
        fcj = JSON.parse(data[0].front_canvas_json)
        bcj = JSON.parse(data[0].back_canvas_json)
        const frontCanvasJson = fcj.json;
        const backCanvasJson = bcj.json;
        
        // Load the front design onto the canvas
        canvas.loadFromJSON(frontCanvasJson, function() {
          console.log("Front design loaded successfully");
          canvas.renderAll(); // Render the canvas after loading
        }, function(o, object) {
          // Optional: Handle any object loading errors
          console.error("Error loading object:", o, object);
        });
        loadBackDesign(backCanvasJson)
      
        // If you want to load the back design as well, you can do it similarly
        // You may want to switch sides or manage layers accordingly
        // For example, you can create a function to switch between front and back designs
      });
      
      // Function to load back design (if needed)
      function loadBackDesign(backJson) {
        canvas.loadFromJSON(backJson, function() {
          console.log("Back design loaded successfully");
          canvas.renderAll(); // Render the canvas after loading
        }, function(o, object) {
          console.error("Error loading object:", o, object);
        });
      }
    let currentSide = 'tshirtFront';  // Default to the front side


    // Load the default clothing item (t-shirt) onto the canvas
    function resizeCanvas() {
        canvas.setWidth(window.innerWidth);
        canvas.setHeight(window.innerHeight);
        canvas.renderAll();

        // Reload current clothing side with new scale and positioning
        loadClothing(currentSide);
    }

    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();

    loadClothing('tshirtFront');


    canvas.on('object:added', () => {
        isDesignSaved = false;
    });
    canvas.on('object:modified', () => {
        isDesignSaved = false;
    });
    canvas.on('object:removed', () => {
        isDesignSaved = false;
    });

    // Function to load clothing SVG and maintain added objects on each side
    function loadClothing(type) {
        // ✅ Prevent cloning/removal while editing
        const isEditing = canvas.getObjects().some(obj => obj.isEditing === true);
        if (isEditing) return;

        const currentObjects = canvas.getObjects().filter(
            obj => obj !== currentClothing && obj !== tshirtBorder
        );

        const clonedObjects = [];
        let cloneCount = 0;

        if (currentObjects.length > 0) {
            currentObjects.forEach(obj => {
                obj.clone(cloned => {
                    clonedObjects.push(cloned);
                    cloneCount++;
                    if (cloneCount === currentObjects.length) {
                        objectsBySide[currentSide] = clonedObjects;
                        proceedToLoad(type);
                    }
                });
            });
        } else {
            proceedToLoad(type);
        }
    }

    function proceedToLoad(type) {
        fabric.loadSVGFromURL(clothingImages[type], function (objects, options) {
            const clothingGroup = fabric.util.groupSVGElements(objects, options);

            // Determine scale factor based on window width
            let scaleFactor = 1;
            const width = window.innerWidth;

            if (width > 1439) scaleFactor = 0.65;
            else if (width > 1023) scaleFactor = 0.6;
            else if (width > 767) scaleFactor = 0.65;
            else if (width > 424) scaleFactor = 0.8;
            else if (width > 374) scaleFactor = 0.9;
            else if (width > 319) scaleFactor = 1;

            const scale = Math.min(
                (window.innerWidth * scaleFactor) / clothingGroup.width,
                (window.innerHeight * scaleFactor) / clothingGroup.height
            );
            clothingGroup.scale(scale);

            clothingGroup.set({
                selectable: false,
                evented: false,
                originX: 'center',
                originY: 'center',
                left: canvas.getWidth() / 2,
                top: canvas.getHeight() / 2
            });

            canvas.add(clothingGroup);
            clothingGroup.sendToBack();
            currentClothing = clothingGroup;

            // ✅ Prevent object removal while editing
            const isEditing = canvas.getObjects().some(obj => obj.isEditing === true);
            if (!isEditing) {
                canvas.getObjects().forEach(obj => {
                    if (obj !== currentClothing && obj !== tshirtBorder) {
                        canvas.remove(obj);
                    }
                });
            }

            // Re-add saved objects for this side
            const savedObjects = objectsBySide[type] || [];
            savedObjects.forEach(obj => {
                obj.set({
                    borderColor: 'gray',
                    cornerColor: 'green',
                    cornerSize: 7,
                    hoverCursor: 'pointer',
                    transparentCorners: true,
                    hasControls: true,
                    lockUniScaling: false,
                    selectable: true,
                    customType: obj.customType || 'graphics'
                });
                canvas.add(obj);
            });

            currentSide = type;
            drawTshirtBorder(type);
            canvas.renderAll();
        });
    }


    let isDesignSaved = false;

    // Save Button Logic
    document.getElementById('saveBtn').addEventListener('click', () => {
        const userObjects = canvas.getObjects().filter(obj => obj !== currentClothing && obj !== tshirtBorder);
        const existingToast = document.querySelector('.toast');
        if (existingToast) existingToast.remove();
        isToastVisible = false;

        const tempCanvas = new fabric.StaticCanvas(null);
        const clonedObjects = [];
        let cloneCount = 0;

        if (userObjects.length === 0) {
            canvasStates[currentSide].json = tempCanvas.toJSON();
            canvasStates[currentSide].preview = canvas.toDataURL({ format: 'png', quality: 1 });
            objectsBySide[currentSide] = [];
            isDesignSaved = true;
            document.getElementById('previewBtn').disabled = false;
            showToast("Design saved successfully!");  // Show success toast after saving
            return;
        }

        userObjects.forEach(obj => {
            obj.clone(cloned => {
                tempCanvas.add(cloned);
                clonedObjects.push(cloned);
                cloneCount++;
                if (cloneCount === userObjects.length) {
                    canvasStates[currentSide].json = tempCanvas.toJSON();
                    canvasStates[currentSide].preview = canvas.toDataURL({ format: 'png', quality: 1 });
                    objectsBySide[currentSide] = clonedObjects;
                    isDesignSaved = true;
                    document.getElementById('previewBtn').disabled = false;
                    showToast("Design saved successfully!");  // Show success toast after saving
                }
            });
        });
        const designnumber = sessionStorage.getItem("designID")
        const uid = sessionStorage.getItem("uid");
        const number = sessionStorage.getItem("number");
        const type = sessionStorage.getItem("type");
        const size = sessionStorage.getItem("size");
        const gender = sessionStorage.getItem("gender");
        const designname = `${number}-${type}-${size}-${gender}`;
        const color = currentTshirtColor;
        const frontCanvasJson = JSON.stringify(canvasStates.tshirtFront); 
        const backCanvasJson = JSON.stringify(canvasStates.tshirtBack); 
        if (!designnumber){
            fetch('/save-design', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                uid,
                name: designname,
                type,
                color,
                fcj: frontCanvasJson,
                bcj: backCanvasJson
            })
            })
            .then(res => res.json())
            .then(data => {
            console.log('Design saved:', data);
            sessionStorage.setItem("designID",data.designId);
            })
            .catch(err => {
            console.error('Error saving design:', err);
            });
        }
        else{
            fetch("/update-design",{
                method:"POST",
                headers:{
                    'Content-Type': 'application/json',
                },
                body : JSON.stringify({
                    did:designnumber,
                    fcj : frontCanvasJson,
                    bcj : backCanvasJson
                })
            })
            .then(res => res.json())
            .then(data => {
            console.log('Design Updated:', data);
            })
            .catch(err => {
            console.error('Error saving design:', err);
            });
        }
        
        
    });


    document.getElementById('AddToCart').addEventListener('click', function () {
        if (isDesignSaved) {
            window.location.href = 'addtocart.html';
        } else {
            showToast("Please save the design first!", "#ab3131");
        }
    });

    document.getElementById('OrderNow').addEventListener('click', function () {
        if (isDesignSaved) {
            window.location.href = 'order.html';
        } else {
            showToast("Please save the design first!", "#ab3131");
        }
    });


    document.getElementById('previewBtn').addEventListener('click', async function () {
        if (!isDesignSaved) {
            showToast("Please save the design first!", "#ab3131");
            return;
        }

        // Backdrop
        const backdrop = document.createElement('div');
        backdrop.className = 'preview-backdrop';

        // Modal container
        const previewContainer = document.createElement('div');
        previewContainer.className = 'preview-container';

        // Carousel wrapper for mobile swipe
        const carouselWrapper = document.createElement('div');
        carouselWrapper.className = 'carousel-wrapper';

        // Close button
        const closeBtn = document.createElement('button');
        closeBtn.className = 'preview-close-btn';
        closeBtn.innerText = '×';
        closeBtn.addEventListener('click', () => {
            document.body.removeChild(previewContainer);
            document.body.removeChild(backdrop);
        });
        previewContainer.appendChild(closeBtn);

        document.body.appendChild(backdrop);
        document.body.appendChild(previewContainer);
        previewContainer.appendChild(carouselWrapper);

        const createPreviewImage = async (side, label) => {
            return new Promise(resolve => {
                const tempCanvas = new fabric.StaticCanvas(null, {
                    width: canvas.getWidth(),
                    height: canvas.getHeight(),
                    backgroundColor: null
                });

                const svg = clothingImages[side];
                const sideObjects = objectsBySide[side] || [];

                fabric.loadSVGFromURL(svg, (objects, options) => {
                    const clothingGroup = fabric.util.groupSVGElements(objects, options);
                    const screenWidth = window.innerWidth;

                    if (screenWidth > 1439) clothingGroup.scaleToWidth(canvas.width * 0.34);
                    else if (screenWidth > 1023) clothingGroup.scaleToWidth(canvas.width * 0.5);
                    else if (screenWidth > 767) clothingGroup.scaleToWidth(canvas.width * 0.645);
                    else if (screenWidth > 424) clothingGroup.scaleToWidth(canvas.width * 0.8);
                    else if (screenWidth > 374) clothingGroup.scaleToWidth(canvas.width * 0.9);
                    else clothingGroup.scaleToWidth(canvas.width * 1);

                    clothingGroup.set({
                        left: canvas.width / 2,
                        top: canvas.height / 2,
                        originX: 'center',
                        originY: 'center',
                        selectable: false,
                        evented: false
                    });

                    tempCanvas.add(clothingGroup);

                    let cloneCount = 0;
                    const finalize = () => {
                        tempCanvas.renderAll();

                        // Compute visible bounds
                        const allObjects = tempCanvas.getObjects();
                        const group = new fabric.Group(allObjects);
                        const bounds = group.getBoundingRect(true, true);

                        const scaleFactor = 4; // or 4 for even higher
                        const retina = window.devicePixelRatio || 1;

                        const croppedCanvas = document.createElement('canvas');
                        croppedCanvas.width = bounds.width * scaleFactor * retina;
                        croppedCanvas.height = bounds.height * scaleFactor * retina;

                        const ctx = croppedCanvas.getContext('2d');
                        ctx.scale(scaleFactor * retina, scaleFactor * retina);

                        ctx.drawImage(
                            tempCanvas.lowerCanvasEl,
                            bounds.left,
                            bounds.top,
                            bounds.width,
                            bounds.height,
                            0,
                            0,
                            bounds.width,
                            bounds.height
                        );

                        const dataURL = croppedCanvas.toDataURL('image/png');
                        const img = new Image();
                        img.src = dataURL;
                        img.alt = label;
                        img.title = `Click to download ${label}`;
                        img.className = 'preview-image';
                        img.style.cursor = 'pointer';
                        img.dataset.label = label;

                        img.addEventListener('click', () => {
                            const link = document.createElement('a');
                            link.href = dataURL;
                            link.download = `${label}.png`;
                            link.click();
                        });

                        resolve(img);
                    };


                    if (sideObjects.length === 0) {
                        finalize();
                    } else {
                        sideObjects.forEach(obj => {
                            obj.clone(cloned => {
                                tempCanvas.add(cloned);
                                cloneCount++;
                                if (cloneCount === sideObjects.length) finalize();
                            });
                        });
                    }
                });
            });
        };

        const [frontImg, backImg] = await Promise.all([
            createPreviewImage('tshirtFront', 'Front View'),
            createPreviewImage('tshirtBack', 'Back View')
        ]);

        // Append both images side-by-side
        previewContainer.appendChild(frontImg);
        previewContainer.appendChild(backImg);
    });



    let isToastVisible = false; // Track if a toast is already visible

    function showToast(message, bgColor = '#143109', callback = null) {
        // If a toast is already visible, remove it immediately and show the new one
        if (isToastVisible) {
            const existingToast = document.querySelector('.toast');
            if (existingToast) {
                existingToast.remove();
            }
        }

        isToastVisible = true; // Mark the toast as visible

        const toast = document.createElement('div');
        toast.className = 'toast';
        toast.style.backgroundColor = bgColor;
        toast.textContent = message;

        const container = document.getElementById('toastContainer');
        container.appendChild(toast);

        // Hide the toast after 3 seconds
        setTimeout(() => {
            toast.remove();
            isToastVisible = false; // Allow new toasts after the current one is removed
            if (callback) callback();  // Execute callback (next toast) after the current one is removed
        }, 2000); // Hide after 3s
    }


    function drawTshirtBorder(type) {
        if (!currentClothing) return;

        const scale = currentClothing.scaleX;
        const groupLeft = currentClothing.left;
        const groupTop = currentClothing.top;

        let borderWidth, borderHeight, topOffset;

        if (type === 'tshirtFront') {
            borderWidth = currentClothing.width * 0.53;
            borderHeight = currentClothing.height * 0.7;
            topOffset = 47 * scale;
        } else {
            borderWidth = currentClothing.width * 0.53;
            borderHeight = currentClothing.height * 0.8;
            topOffset = 10 * scale;
        }

        // Ensure the t-shirt is still on canvas
        if (!canvas.getObjects().includes(currentClothing)) {
            canvas.add(currentClothing);
        }

        // Remove previous border if any
        if (tshirtBorder) {
            canvas.remove(tshirtBorder);
            tshirtBorder = null;
        }

        // Add visual dashed border
        tshirtBorder = new fabric.Rect({
            left: groupLeft,
            top: groupTop + topOffset,
            width: borderWidth * scale,
            height: borderHeight * scale,
            stroke: 'gray',
            strokeWidth: 2,
            fill: 'transparent',
            strokeDashArray: [6, 4],
            originX: 'center',
            originY: 'center',
            selectable: false,
            evented: false
        });

        canvas.add(tshirtBorder);

        // Prepare clip group
        const clipRect = new fabric.Rect({
            width: borderWidth * scale,
            height: borderHeight * scale,
            originX: 'center',
            originY: 'center'
        });

        const clipGroup = new fabric.Group([clipRect], {
            left: groupLeft,
            top: groupTop + topOffset,
            originX: 'center',
            originY: 'center',
            absolutePositioned: true
        });


        canvas.on('object:moving', function (e) {
            const obj = e.target;
            if (obj && tshirtBorder) {
                if (obj.type === 'textbox' || obj.type === 'i-text' || obj.type === 'text') {
                    enforcePartialClippingBoundsForText(obj, tshirtBorder);
                } else {
                    enforcePartialClippingBoundsForGraphics(obj, tshirtBorder);
                }
            }
        });

        function enforcePartialClippingBoundsForGraphics(obj, borderRect) {
            const bounds = obj.getBoundingRect(true); // True = absolute bounds
            const objLeft = bounds.left;
            const objRight = bounds.left + bounds.width;
            const objTop = bounds.top;
            const objBottom = bounds.top + bounds.height;

            const borderLeft = borderRect.left - borderRect.width / 2;
            const borderRight = borderRect.left + borderRect.width / 2;
            const borderTop = borderRect.top - borderRect.height / 2;
            const borderBottom = borderRect.top + borderRect.height / 2;

            const minVisibleRatio = 1; // at least 50% of object must remain inside
            const minVisibleWidth = bounds.width * minVisibleRatio;
            const minVisibleHeight = bounds.height * minVisibleRatio;

            let dx = 0, dy = 0;

            if (objRight - minVisibleWidth > borderRight) {
                dx = borderRight - (objRight - minVisibleWidth);
            } else if (objLeft + minVisibleWidth < borderLeft) {
                dx = borderLeft - (objLeft + minVisibleWidth);
            }

            if (objBottom - minVisibleHeight > borderBottom) {
                dy = borderBottom - (objBottom - minVisibleHeight);
            } else if (objTop + minVisibleHeight < borderTop) {
                dy = borderTop - (objTop + minVisibleHeight);
            }

            obj.left += dx;
            obj.top += dy;
            obj.setCoords();
        }

        function enforcePartialClippingBoundsForText(obj, borderRect) {
            const bounds = obj.getBoundingRect(true);
            const objLeft = bounds.left;
            const objRight = bounds.left + bounds.width;
            const objTop = bounds.top;
            const objBottom = bounds.top + bounds.height;

            const borderLeft = borderRect.left - borderRect.width / 2;
            const borderRight = borderRect.left + borderRect.width / 2;
            const borderTop = borderRect.top - borderRect.height / 2;
            const borderBottom = borderRect.top + borderRect.height / 2;

            const minVisibleRatio = 1;
            const minVisibleWidth = bounds.width * minVisibleRatio;
            const minVisibleHeight = bounds.height * minVisibleRatio;

            let dx = 0, dy = 0;

            if (objRight - minVisibleWidth > borderRight) {
                dx = borderRight - (objRight - minVisibleWidth);
            } else if (objLeft + minVisibleWidth < borderLeft) {
                dx = borderLeft - (objLeft + minVisibleWidth);
            }

            if (objBottom - minVisibleHeight > borderBottom) {
                dy = borderBottom - (objBottom - minVisibleHeight);
            } else if (objTop + minVisibleHeight < borderTop) {
                dy = borderTop - (objTop + minVisibleHeight);
            }

            obj.left += dx;
            obj.top += dy;
            obj.setCoords();
        }


        // Make sure layering is correct
        canvas.sendToBack(currentClothing);
        canvas.bringToFront(tshirtBorder);
        canvas.renderAll();
    }

    // === Clip Path Utility ===
    function applyClipPathToObject(obj) {
        if (!currentClothing || !tshirtBorder || obj === currentClothing || obj === tshirtBorder) return;

        const scale = currentClothing.scaleX;
        const groupLeft = currentClothing.left;
        const groupTop = currentClothing.top;

        let borderWidth, borderHeight, topOffset;

        if (currentSide === 'tshirtFront') {
            borderWidth = currentClothing.width * 0.53;
            borderHeight = currentClothing.height * 0.7;
            topOffset = 47 * scale;
        } else {
            borderWidth = currentClothing.width * 0.53;
            borderHeight = currentClothing.height * 0.8;
            topOffset = 10 * scale;
        }

        const clipRect = new fabric.Rect({
            width: borderWidth * scale,
            height: borderHeight * scale,
            originX: 'center',
            originY: 'center'
        });

        obj.clipPath = new fabric.Group([clipRect], {
            left: groupLeft,
            top: groupTop + topOffset,
            originX: 'center',
            originY: 'center',
            absolutePositioned: true
        });
    }

    canvas.on('object:added', function (e) {
        const obj = e.target;

        if (
            !obj ||
            obj === currentClothing ||
            obj === tshirtBorder ||
            obj.clipPath ||
            obj.excludeFromClip ||
            (obj.type === 'group' && obj._objects?.[0]?.type === 'rect')  // possible clipPath group
        ) {
            return;
        }

        // Mark manually added clipPath components to avoid reprocessing
        obj.excludeFromClip = true;

        // Apply clip path
        applyClipPathToObject(obj);
    });


    // ==== PINCH TO ZOOM ====

    // Zoom config
    let zoomLevel = 1;
    const minZoom = 0.5;
    const maxZoom = 5;
    let isPinching = false;
    let lastTouchDistance = null;
    let initialZoom = canvas.getZoom();

    // Helper: distance between 2 touch points
    function getDistance(touch1, touch2) {
        const dx = touch2.clientX - touch1.clientX;
        const dy = touch2.clientY - touch1.clientY;
        return Math.sqrt(dx * dx + dy * dy);
    }

    // Helper: midpoint of 2 touch points
    function getMidpoint(touch1, touch2) {
        return new fabric.Point(
            (touch1.clientX + touch2.clientX) / 2,
            (touch1.clientY + touch2.clientY) / 2
        );
    }

    // Prevent native browser gestures
    canvas.upperCanvasEl.style.touchAction = 'none';

    // ===== TOUCH START: Begin pinch
    canvas.upperCanvasEl.addEventListener('touchstart', function (e) {
        if (e.touches.length === 2) {
            isPinching = true;
            lastTouchDistance = getDistance(e.touches[0], e.touches[1]);
            initialZoom = canvas.getZoom();

            // 🔒 Disable selection while pinching
            canvas.selection = false;
            canvas.discardActiveObject();
            canvas.renderAll();
        }
    }, { passive: false });

    // ===== TOUCH MOVE: Zoom logic
    canvas.upperCanvasEl.addEventListener('touchmove', function (e) {
        if (e.touches.length === 2) {
            e.preventDefault(); // prevent scrolling

            const currentDistance = getDistance(e.touches[0], e.touches[1]);
            const zoomFactor = currentDistance / lastTouchDistance;
            let newZoom = initialZoom * zoomFactor;
            newZoom = Math.max(minZoom, Math.min(newZoom, maxZoom));

            const midpoint = getMidpoint(e.touches[0], e.touches[1]);
            canvas.zoomToPoint(midpoint, newZoom);
            zoomLevel = newZoom;
        }
    }, { passive: false });

    // ===== TOUCH END: Reset after pinch
    canvas.upperCanvasEl.addEventListener('touchend', function (e) {
        if (e.touches.length < 2) {
            isPinching = false;
            canvas.selection = true; // restore normal selection
            canvas.renderAll();
        }
    });


    // Disable object selection during pinch gesture
    canvas.on('before:selection:cleared', function (e) {
        if (isPinching && e.e) {
            e.e.preventDefault();
        }
    });

    canvas.on('object:selected', function (e) {
        if (isPinching) {
            canvas.discardActiveObject();
            canvas.renderAll();
        }
    });

    // ====== UNIVERSAL ZOOM FUNCTION ======
    function zoomCanvas(delta, pointer = null) {
        zoomLevel = Math.max(minZoom, Math.min(maxZoom, zoomLevel + delta));
        const zoomPoint = pointer || canvas.getCenter();
        canvas.zoomToPoint(new fabric.Point(zoomPoint.left || zoomPoint.x, zoomPoint.top || zoomPoint.y), zoomLevel);
    }

    // ====== BUTTON ZOOM ======
    document.getElementById('zoomInBtn').addEventListener('click', () => zoomCanvas(zoomFactor));
    document.getElementById('zoomOutBtn').addEventListener('click', () => zoomCanvas(-zoomFactor));

    // ====== MOUSE SCROLL ZOOM ======
    function enableMouseScrollZoom() {
        canvas.upperCanvasEl.addEventListener('wheel', function (e) {
            if (e.ctrlKey) return;
            e.preventDefault();

            const delta = e.deltaY < 0 ? zoomFactorForMouse : -zoomFactorForMouse;
            const rect = canvas.upperCanvasEl.getBoundingClientRect();
            const pointer = {
                x: e.clientX - rect.left,
                y: e.clientY - rect.top
            };

            zoomCanvas(delta, pointer);
        });
    }

    // ====== TOUCHPAD PINCH GESTURE (CTRL + SCROLL) ======
    function enableTouchpadGestureZoom() {
        canvas.upperCanvasEl.addEventListener('wheel', function (e) {
            if (!e.ctrlKey) return;
            e.preventDefault();

            const delta = e.deltaY < 0 ? zoomFactorForTouchPad : -zoomFactorForTouchPad;
            const rect = canvas.upperCanvasEl.getBoundingClientRect();
            const pointer = {
                x: e.clientX - rect.left,
                y: e.clientY - rect.top
            };

            zoomCanvas(delta, pointer);
        }, { passive: false });
    }

    // ====== PINCH TO ZOOM (MOBILE TOUCH) ======

    // Set style to prevent native browser zoom/pan
    canvas.upperCanvasEl.style.touchAction = 'none';

    function getDistance(touch1, touch2) {
        const dx = touch2.clientX - touch1.clientX;
        const dy = touch2.clientY - touch1.clientY;
        return Math.sqrt(dx * dx + dy * dy);
    }

    function getMidpoint(touch1, touch2) {
        return new fabric.Point(
            (touch1.clientX + touch2.clientX) / 2,
            (touch1.clientY + touch2.clientY) / 2
        );
    }

    canvas.upperCanvasEl.addEventListener('touchstart', function (e) {
        if (e.touches.length === 2) {
            lastTouchDistance = getDistance(e.touches[0], e.touches[1]);
            initialZoom = canvas.getZoom();
            isPinching = true;

            canvas.selection = false;
            canvas.discardActiveObject();
            canvas.renderAll();
        }
    }, { passive: false });

    canvas.upperCanvasEl.addEventListener('touchmove', function (e) {
        if (e.touches.length === 2) {
            e.preventDefault();
            const currentDistance = getDistance(e.touches[0], e.touches[1]);
            const zoomFactor = currentDistance / lastTouchDistance;
            let newZoom = initialZoom * zoomFactor;
            newZoom = Math.max(minZoom, Math.min(maxZoom, newZoom));

            const midpoint = getMidpoint(e.touches[0], e.touches[1]);
            canvas.zoomToPoint(midpoint, newZoom);
            zoomLevel = newZoom;
        }
    }, { passive: false });

    canvas.upperCanvasEl.addEventListener('touchend', function (e) {
        if (e.touches.length < 2) {
            isPinching = false;
            canvas.selection = true;
            canvas.renderAll();
        }
    });

    // ====== BLOCK INTERACTION WHILE PINCHING ======
    canvas.on('before:selection:cleared', function (e) {
        if (isPinching && e.e) {
            e.e.preventDefault();
        }
    });

    canvas.on('object:selected', function (e) {
        if (isPinching) {
            canvas.discardActiveObject();
            canvas.renderAll();
        }
    });

    // ====== BLOCK MULTI-TOUCH DRAGGING ======
    canvas.on('mouse:down', function (opt) {
        if (opt.e && opt.e.touches && opt.e.touches.length > 1) {
            opt.e.preventDefault();
        }
    });

    // ====== INITIATE SCROLL ZOOMS ======
    enableMouseScrollZoom();
    enableTouchpadGestureZoom();





    // Clothing type selection
    document.querySelectorAll('.view-button').forEach(btn => {
        btn.addEventListener('click', function () {
            document.querySelector('.view-button.active').classList.remove('active');
            this.classList.add('active');
            loadClothing(this.dataset.type);
        });
    });


    // Get references to toolbar icons and panels
    const colorIcon = document.getElementById('colorPicker');
    const colorPanel = document.getElementById('colorPanel');
    const textIcon = document.getElementById('textIcon');
    const textPanel = document.getElementById('textPanel');
    const graphicsPanel = document.getElementById('graphicsPanel');
    const categoryPanel = document.getElementById("categoryPanel");


    // Toggle visibility of color panel
    colorIcon.addEventListener('click', () => {
        const isHidden = colorPanel.style.display === 'none' || colorPanel.style.display === '';
        colorPanel.style.display = isHidden ? 'block' : 'none';
        textPanel.style.display = 'none';
        graphicsPanel.style.display = 'none';
        categoryPanel.style.display = "none";
    });


    // Toggle visibility of text panel
    textIcon.addEventListener('click', () => {
        const isHidden = textPanel.style.display === 'none' || textPanel.style.display === '';
        textPanel.style.display = isHidden ? 'block' : 'none';
        colorPanel.style.display = 'none';
        graphicsPanel.style.display = 'none';
        categoryPanel.style.display = "none";
    });


    // Toggle visibility of Graphics panel
    graphicsIcon.addEventListener('click', () => {
        const isHidden = graphicsPanel.style.display === 'none' || graphicsPanel.style.display === '';
        graphicsPanel.style.display = isHidden ? 'block' : 'none';
        colorPanel.style.display = 'none';
        textPanel.style.display = 'none';
        categoryPanel.style.display = "none";
    });


    // List of available fonts for text customization
    const fonts = [
        'Arial', 'ABeeZee', 'Abel', 'Abhaya Libre', 'ABORETO', 'Abril Fatface',
        'Acme', 'Actor', 'Adamina', 'Advent Pro', 'Anton',
        'Arvo', 'Bebas Neue', 'Cabin', 'Cairo', 'Comfortaa',
        'Dancing Script', 'DM Serif Display', 'Domine', 'Fira Sans', 'Frank Ruhl Libre',
        'Fredericka the Great', 'Great Vibes', 'IBM Plex Sans', 'Inconsolata', 'Indie Flower',
        'Josefin Sans', 'Kalam', 'Lato', 'Libre Baskerville', 'Lobster',
        'Merriweather', 'Montserrat', 'Mukta', 'Nanum Gothic', 'Noto Serif',
        'Nunito', 'Oswald', 'Overpass', 'Pacifico', 'Playfair Display',
        'Poppins', 'PT Sans', 'Quicksand', 'Raleway', 'Roboto',
        'Roboto Slab', 'Rubik', 'Source Sans Pro'
    ];


    // DOM references for font list and search input
    const fontListEl = document.getElementById('fontList');
    const searchInput = document.getElementById('searchInput');


    // Load and display fonts based on optional search filter
    function loadFonts(filter = '') {
        fontListEl.innerHTML = '';


        // Filter fonts by name and render them
        fonts
            .filter(font => font.toLowerCase().includes(filter.toLowerCase()))
            .forEach(font => {
                const div = document.createElement('option');
                div.value = font;
                div.className = 'font-item';
                div.innerText = font;
                div.style.fontFamily = `'${font}', sans-serif`;
                div.addEventListener('click', () => applyFont(font)); // Apply font on click
                fontListEl.appendChild(div);
            });
    }


    // Update font list as user types in the search bar
    searchInput.addEventListener('input', () => {
        const query = searchInput.value;
        loadFonts(query);
    });


    // Render font list initially without any filter
    loadFonts();


    // Applies the selected font to a target element (fallback if needed)
    function applyFont(font) {
        const selectedText = document.getElementById('textOutput'); // fallback DOM element
        if (selectedText) {
            selectedText.style.fontFamily = `'${font}', sans-serif`;
        }
    }


    // Loads fonts into a font list with optional filtering
    function loadFonts(filter = '') {
        fontListEl.innerHTML = ''; // Clear the existing list


        // Filter and create font list items
        fonts
            .filter(font => font.toLowerCase().includes(filter.toLowerCase()))
            .forEach(font => {
                const fontDiv = document.createElement('div');
                fontDiv.className = 'font-item';
                fontDiv.innerText = font;
                fontDiv.style.fontFamily = `'${font}', sans-serif`;
                fontDiv.style.cursor = 'pointer';


                // On click, add text to canvas with selected font
                fontDiv.addEventListener('click', () => {
                    addTextToCanvas(font);
                    closePanel('textPanel');
                });

                fontListEl.appendChild(fontDiv);
            });
    }

    // === DOM Elements ===
    const textEditor = document.getElementById('textEditor');
    const fontSelect = document.getElementById('fontList');
    const fontSizeInput = document.getElementById('fontSizeInput');
    const boldBtn = document.getElementById('boldBtn');
    const italicBtn = document.getElementById('italicBtn');
    const underlineBtn = document.getElementById('underlineBtn');
    const colorTrigger = document.getElementById('colorTrigger');
    const color_Picker = document.getElementById('color-Picker');
    const toggleBtn = document.getElementById('transparencyToggle');
    const panel = document.getElementById('transparencyPanel');
    const slider = document.getElementById('transparencySlider');
    const valueInput = document.getElementById('transparencyValue');

    let currentFontSize = 20;
    let lastTextObject = null;

    // === Initial Setup ===
    textEditor.style.display = 'none';


    // === Add Text to Canvas ===
    function addTextToCanvas(font) {
        const textObj = new fabric.Textbox('Enter text', {
            left: canvas.width / 2,
            top: canvas.height / 2,
            width: 150,
            fontFamily: font,
            fill: '#000000',
            fontSize: 30,
            originX: 'center',
            originY: 'center',
            editable: true,
            borderColor: 'gray',
            cornerColor: 'green',
            cornerSize: 7,
            transparentCorners: true,
            hoverCursor: 'pointer',
            opacity: 1,
        });

        canvas.add(textObj);
        canvas.setActiveObject(textObj);
        syncToolbarWithActiveText();
        canvas.renderAll();
        textObj.enterEditing();
    }

    // === Toolbar Sync ===
    function syncToolbarWithActiveText() {
        const active = canvas.getActiveObject();
        if (active && active.isType('textbox')) {
            textEditor.style.display = 'flex';

            if (fontSelect) fontSelect.value = active.fontFamily || 'Arial';
            if (fontSizeInput) fontSizeInput.value = active.fontSize || 20;
            if (color_Picker) color_Picker.value = active.fill || '#000000';

            currentFontSize = active.fontSize || 20;

        } else {
            textEditor.style.display = 'none';
        }
    }

    // === Update Selected Text Object ===
    function updateSelectedText(properties) {
        const active = canvas.getActiveObject();
        if (active && active.isType('textbox')) {
            active.set(properties);
            canvas.renderAll();
        }
    }

    // === Opacity Handling ===
    function applyOpacity(percent) {
        const active = canvas.getActiveObject();
        if (active && active.isType('textbox')) {
            const opacityValue = parseFloat(percent) / 100;
            active.set({ opacity: opacityValue });
            canvas.renderAll();
        }
    }

    // === Events ===

    // Delete object on Delete/Backspace (not while editing)
    document.addEventListener('keydown', (e) => {
        const activeObject = canvas.getActiveObject();
        if ((e.key === 'Delete' || e.key === 'Backspace') && activeObject && !activeObject.isEditing) {
            canvas.remove(activeObject);
            canvas.renderAll();
        }
    });

    // Canvas Selection Events
    canvas.on('selection:created', (e) => {
        const active = e.selected?.[0];
        if (active?.type === "textbox") {
            lastTextObject = active;

            active.on("editing:exited", () => {
                if (!active.text?.trim()) {
                    canvas.remove(active);
                    canvas.discardActiveObject();
                    canvas.requestRenderAll();
                }
            });
        }
        syncToolbarWithActiveText();
    });

    canvas.on('selection:updated', (e) => {
        const active = e.selected?.[0];
        if (active?.type === "textbox") {
            lastTextObject = active;

            active.on("editing:exited", () => {
                if (!active.text?.trim()) {
                    canvas.remove(active);
                    canvas.discardActiveObject();
                    canvas.requestRenderAll();
                }
            });
        }
        syncToolbarWithActiveText();
    });

    canvas.on('selection:cleared', () => {
        if (lastTextObject?.type === "textbox" && !lastTextObject.text?.trim()) {
            canvas.remove(lastTextObject);
            canvas.requestRenderAll();
        }
        lastTextObject = null;
        textEditor.style.display = 'none';
    });

    // Assuming your delete button has an ID of 'deleteButton'
    const deleteButton = document.getElementById('deleteBtn');

    // Event listener for the delete button
    deleteButton.addEventListener('click', () => {
        const activeObject = canvas.getActiveObject();
        if (activeObject) {
            // Remove the selected object from the canvas
            canvas.remove(activeObject);
            canvas.renderAll();
        }
    });


    // Font Size Controls
    document.getElementById('increaseSize').addEventListener('click', () => {
        currentFontSize += 2;
        fontSizeInput.value = currentFontSize;
        updateSelectedText({ fontSize: currentFontSize });
    });

    document.getElementById('decreaseSize').addEventListener('click', () => {
        currentFontSize = Math.max(8, currentFontSize - 2);
        fontSizeInput.value = currentFontSize;
        updateSelectedText({ fontSize: currentFontSize });
    });

    fontSizeInput.addEventListener('change', (e) => {
        currentFontSize = parseInt(e.target.value) || 20;
        updateSelectedText({ fontSize: currentFontSize });
    });

    // Font + Color
    fontSelect.addEventListener('change', () => {
        updateSelectedText({ fontFamily: fontSelect.value });
    });

    colorTrigger.addEventListener("click", () => color_Picker.click());
    color_Picker.addEventListener("input", () => {
        colorTrigger.style.backgroundColor = color_Picker.value;
    });
    color_Picker.addEventListener('change', () => {
        updateSelectedText({ fill: color_Picker.value });
    });

    // Bold, Italic, Underline
    boldBtn.addEventListener('click', () => {
        const active = canvas.getActiveObject();
        if (active?.isType('textbox')) {
            active.set({ fontWeight: active.fontWeight === 'bold' ? 'normal' : 'bold' });
            canvas.renderAll();
        }
    });

    italicBtn.addEventListener('click', () => {
        const active = canvas.getActiveObject();
        if (active?.isType('textbox')) {
            active.set({ fontStyle: active.fontStyle === 'italic' ? 'normal' : 'italic' });
            canvas.renderAll();
        }
    });

    underlineBtn.addEventListener('click', () => {
        const active = canvas.getActiveObject();
        if (active?.isType('textbox')) {
            active.set({ underline: !active.underline });
            canvas.renderAll();
        }
    });

    // Opacity Panel Controls
    toggleBtn.addEventListener('click', () => {
        const rect = toggleBtn.getBoundingClientRect();
        const extraOffset = window.innerWidth <= 425 ? -48 : 0; // shift down 50px on small screens
        panel.style.top = `${rect.bottom + window.scrollY + extraOffset + 3}px`; // 5px gap
        panel.classList.toggle('hidden');
    });

    slider.addEventListener('input', () => {
        valueInput.value = slider.value;
        applyOpacity(slider.value);
    });

    valueInput.addEventListener('input', () => {
        const val = Math.min(100, Math.max(0, valueInput.value));
        slider.value = val;
        applyOpacity(val);
    });

    document.addEventListener('click', (e) => {
        if (!panel.contains(e.target) && !toggleBtn.contains(e.target)) {
            panel.classList.add('hidden');
        }
    });



    const graphicsData = {
        curvedText: [
            "/public/images/cloths/1.svg", "/public/images/cloths/2.svg", "/public/images/cloths/3.svg",
            "/public/images/cloths/4.svg", "/public/images/cloths/5.svg", "/public/images/cloths/6.svg",
            "/public/images/cloths/13.svg", "/public/images/cloths/14.svg", "/public/images/cloths/15.svg",
            "/public/images/cloths/18.svg", "/public/images/cloths/19.svg", "/public/images/cloths/20.svg",
            "/public/images/cloths/21.svg", "/public/images/cloths/22.svg", "/public/images/cloths/23.svg",
            "/public/images/cloths/24.svg", "/public/images/cloths/25.svg",
        ],
        textElements: [
            "/public/images/cloths/7.svg", "/public/images/cloths/8.svg", "/public/images/cloths/9.svg",
            "/public/images/cloths/10.svg", "/public/images/cloths/11.svg", "/public/images/cloths/12.svg",
            "/public/images/cloths/16.svg", "/public/images/cloths/17.svg", "/public/images/cloths/26.svg",
            "/public/images/cloths/27.svg", "/public/images/cloths/28.svg", "/public/images/cloths/29.svg",
            "/public/images/cloths/30.svg", "/public/images/cloths/31.svg", "/public/images/cloths/32.svg",
            "/public/images/cloths/33.svg", "/public/images/cloths/34.svg",
        ]
    };

    const INITIAL_LIMIT = 6;

    // Load limited preview graphics in main panel
    function loadGraphics(category, showAll = false) {
        const container = document.querySelector(`.grid[data-category="${category}"]`);
        container.innerHTML = "";
        const items = graphicsData[category];
        const toShow = showAll ? items : items.slice(0, INITIAL_LIMIT);

        toShow.forEach(src => {
            const img = document.createElement("img");
            img.src = src;
            container.appendChild(img);
        });
    }

    // Load preview for both categories
    loadGraphics("curvedText");
    loadGraphics("textElements");

    // Show more handler
    document.querySelectorAll(".show-more").forEach(link => {
        link.addEventListener("click", function (e) {
            e.preventDefault();

            const category = this.getAttribute("data-category");
            const items = graphicsData[category];

            // Set category title in new panel
            document.getElementById("categoryTitle").textContent = category === "curvedText" ? "Curved Text" : "Text Elements";

            // Load all items in new panel
            const categoryGrid = document.getElementById("categoryGrid");
            categoryGrid.innerHTML = "";
            items.forEach(src => {
                const img = document.createElement("img");
                img.src = src;
                categoryGrid.appendChild(img);
            });

            // Toggle visibility: hide graphicsPanel and show categoryPanel
            document.getElementById("graphicsPanel").style.display = "none";
            document.getElementById("categoryPanel").style.display = "block";
        });
    });

    // Back button handler
    document.getElementById("backToGraphics").addEventListener("click", () => {
        document.getElementById("categoryPanel").style.display = "none";
        document.getElementById("graphicsPanel").style.display = "block";
    });


    // Function to load the graphic into the canvas
    function addGraphicToCanvas(src) {
        fabric.Image.fromURL(src, function (img) {
            img.set({
                left: canvas.width / 2,
                top: canvas.height / 2,
                angle: 0,
                opacity: 1,
                scaleX: 0.1,
                scaleY: 0.1,
                borderColor: 'gray',
                cornerColor: 'green',
                cornerSize: 7,
                hoverCursor: 'pointer',
                transparentCorners: true,
                hasControls: true,
                lockUniScaling: false,
                selectable: true,
                customType: 'graphics' // ✅ Identify this as a graphic
            });

            canvas.add(img);
            canvas.centerObject(img);
            canvas.setActiveObject(img); // Optional: auto-select
            canvas.renderAll();
        });
    }

    // Handle image click inside the category panel
    document.querySelectorAll(".grid img").forEach(imgElement => {
        imgElement.addEventListener("click", function () {
            const src = this.src;
            addGraphicToCanvas(src);
            closePanel('graphicsPanel');
        });
    });

    document.getElementById("categoryGrid").addEventListener("click", function (e) {
        if (e.target.tagName === "IMG") {
            const src = e.target.src;
            addGraphicToCanvas(src);
            closePanel('categoryPanel');
        }
    });

    // Upload icon click triggers file input
    document.getElementById('uploadIcon').addEventListener('click', () => {
        document.getElementById('graphicUploadInput').click();
    });

    // Handle uploaded graphics (all image types including SVG)
    function handleGraphicUpload(file) {
        const reader = new FileReader();

        reader.onload = function (event) {
            fabric.Image.fromURL(event.target.result, function (img) {
                img.set({
                    left: canvas.width / 2,
                    top: canvas.height / 2,
                    angle: 0,
                    opacity: 1,
                    scaleX: 0.1,
                    scaleY: 0.1,
                    borderColor: 'gray',
                    cornerColor: 'green',
                    cornerSize: 7,
                    hoverCursor: 'pointer',
                    transparentCorners: true,
                    hasControls: true,
                    lockUniScaling: false,
                    selectable: true,
                    customType: 'graphics'
                });
                canvas.add(img).setActiveObject(img);
                canvas.renderAll();
            });
        };

        reader.readAsDataURL(file);
    }

    // On file selection
    document.getElementById('graphicUploadInput').addEventListener('change', function () {
        const file = this.files[0];
        if (file && file.type.startsWith('image/')) {
            handleGraphicUpload(file);
        } else {
            alert('Unsupported file type. Please upload a valid image.');
        }
        this.value = '';
    });

    // ===== GRAPHICS EDITOR PANEL LOGIC =====
    const graphicsEditor = document.getElementById('graphicsEditor');
    graphicsEditor.style.display = 'none';

    // Show/hide graphics editor panel based on selection
    function updateGraphicsEditorPanel() {
        const active = canvas.getActiveObject();
        if (active && active.type === 'image' && active.customType === 'graphics') {
            graphicsEditor.style.display = 'flex';
        } else {
            graphicsEditor.style.display = 'none';
        }
    }

    // Bind selection events to toggle the panel
    canvas.on('selection:created', updateGraphicsEditorPanel);
    canvas.on('selection:updated', updateGraphicsEditorPanel);
    canvas.on('selection:cleared', () => {
        graphicsEditor.style.display = 'none';
    });

    // ===== DELETE GRAPHIC BUTTON =====
    document.getElementById('deleteBtn1').addEventListener('click', () => {
        const active = canvas.getActiveObject();
        if (active && active.type === 'image' && active.customType === 'graphics') {
            canvas.remove(active);
            canvas.discardActiveObject();
            canvas.renderAll();
            graphicsEditor.style.display = 'none';
        }
    });




    let dragMode = false;
    let lastPosX = 0;
    let lastPosY = 0;

    const upperCanvas = canvas.upperCanvasEl;

    // Enable drag mode on right-click (mousedown)
    upperCanvas.addEventListener('mousedown', function (e) {
        if (e.button === 2) { // Right-click
            dragMode = true;
            lastPosX = e.clientX;
            lastPosY = e.clientY;
            upperCanvas.style.cursor = 'grabbing';
            console.log("Grab");
            e.preventDefault();
        }

        if (e.button === 0 && dragMode) { // Left-click
            dragMode = false;
            upperCanvas.style.cursor = 'default';
            console.log("notGrab");
        }
    });

    // while (dragMode) {
    // Handle dragging
    upperCanvas.addEventListener('mousemove', function (e) {
        if (!dragMode) return;
        // upperCanvas.style.cursor = 'grabbing';
        // console.log("Dragging");
        // Force cursor to stay grabbing
        upperCanvas.style.cursor = 'grabbing';

        const dx = e.clientX - lastPosX;
        const dy = e.clientY - lastPosY;

        canvas.relativePan({ x: dx, y: dy });

        lastPosX = e.clientX;
        lastPosY = e.clientY;

        console.log("not     Grab");
    });
    // }

    // Prevent right-click context menu
    upperCanvas.addEventListener('contextmenu', function (e) {
        e.preventDefault();
    });
});

function closePanel(panelId) {
    const panel = document.getElementById(panelId);
    if (panel) {
        panel.style.display = 'none';
    }
}
