# 고객 감사 편지 쓰기 (PDF 파일 생성)
 
csv에 저장된 받는 사람과 보내는 사람 이름을 불러와 pdf 편지를 생성하는 프로그램입니다.

* `git colne https://github.com/sujinleeme/csv-to-pdf-letters.git`을 실행해 리퍼지토리를 다운받으세요.

* `npm install`을 실행해 노드 패키지를 설치하세요.
 
* csv 데이터를 준비합니다.
    * data.csv 파일에 받는 사람과 보내는 사람을 데이터를 입력합니다.
    * cf) 별도 엑셀 파일을 사용할 경우, 간혹  `utf-8` 유니코드 문제가 있을 수 있습니다. 문제 시, `filename.xls`로 저장한 후 (메뉴에서 `파일-다른 이름으로 저장하기` 선택), 만들어진 xls 파일을 다시 `filename.csv`로 저장합니다.
    
* 편지 템플릿 본문 내용을 수정/작성합니다.
    * 제목: `template/body.js`
    * 내용: `template/title.js`
    
* pdf를 생성합니다.
    * `node makepdf.js` 명령어를 입력합니다.
    * 각 행마다 순차적으로 `number.pdf`파일이 생성되며, 생성된 파일은 `pdf` 폴더에 저장됩니다.

* pdf 문서 텍스트 스타일링
    *  `pdfMaker.js` 파일에서 문서 레이아웃, 텍스트 등 스타일을 수정할 수 있습니다.
    * 자세한 내용은 [pdfkit](https://github.com/devongovett/pdfkit)문서를 참고하세요.
    
