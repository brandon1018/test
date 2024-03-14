await function loadCommonScripts() {
    // jQuery.js 파일을 로드
    var jQueryScript = document.createElement('script');
    jQueryScript.src = '/common/js/jquery-3.6.0.min.js';
    document.head.appendChild(jQueryScript);

    // axiosInstance.js 파일을 로드
    // var axiosScript = document.createElement('script');
    // axiosScript.src = 'common/axiosInstance.js';
    // document.head.appendChild(axiosScript);

    console.log('common js loaded!');
};

// 페이지 로드 시 공통 파일 로드
// window.onload = async loadCommonScripts;


// window.onload = function() {
//     console.log('home 1000 !')
//     $('#home').on('click', function () {
//         $('#home').hide();
//     });
// }
