import{r as e,_ as d,j as s}from"../../index.js";import{c as r,V as o}from"./classnames.chunk.js";const a=e.lazy(()=>d(()=>import("./code.chunk.js"),__vite__mapDeps([0,1,2,3,4]),import.meta.url)),n={startCompose:`$ docker compose up
[+] Running 1/0
 ✔ Container virtuoso_deployer  Recreated   0.1s 
Attaching to virtuoso_deployer`,checkContainerList:`$ docker container list
CONTAINER ID   IMAGE              COMMAND                  CREATED          STATUS          PORTS                                 NAMES
89ba94xxxxxx   virtuosodeployer   "sleep infinity"         12 minutes ago   Up 12 minutes   0.0.0.0:33333->33333/tcp, 33445/tcp   virtuoso_deployer`,containerExec:`$ docker exec -it virtuoso_deployer /bin/bash
root@89ba94e2d0b8:~# `,cdCoin:"root@89ba9dscd0b8:~# cd coin",build:"root@89ba94e2d0b8:~/coin# ../tool/buildunix.sh"};function p(i){const{className:l,...c}=i;return s.jsxs("div",{className:r("flex flex-col",l),...c,children:[s.jsxs("h4",{className:"sc-title",children:[s.jsx(o,{}),"Langkah Build Coin"]}),s.jsxs("ol",{className:"n-list leading-8",children:[s.jsx("li",{className:"mt-1",children:s.jsxs("div",{className:"flex flex-col gap-1",children:[s.jsxs("p",{children:["Jalankan"," ",s.jsx("span",{className:"code",children:"docker compose"})," yang sudah disediakan dengan mengetikkan perintah pada"," ",s.jsx("span",{className:"code",children:"terminal"})," :"]}),s.jsx(e.Suspense,{children:s.jsx(a,{lang:"bash",codeString:n.startCompose})}),s.jsxs("p",{children:["Tunggu sampai sampai"," ",s.jsx("span",{className:"attention",children:"instance"})," berhasil berjalan dengan sempurna."]})]})}),s.jsx("li",{className:"mt-1",children:s.jsxs("div",{className:"flex flex-col gap-1",children:[s.jsxs("p",{children:["Masuk kedalam ",s.jsx("span",{className:"code",children:"terminal"})," ","container, buka"," ",s.jsx("span",{className:"code",children:"terminal"})," baru di"," ",s.jsx("span",{className:"code",children:"VSCode"})," kemudian jalankan perintah :"]}),s.jsx(e.Suspense,{children:s.jsx(a,{lang:"bash",codeString:n.checkContainerList})})]})}),s.jsx("li",{className:"mt-1",children:s.jsxs("div",{className:"flex flex-col gap-1",children:[s.jsx("p",{children:"Kemudian masuk kedalam container menggunakan ID / Name container :"}),s.jsx(e.Suspense,{children:s.jsx(a,{codeString:n.containerExec,lang:"bash"})}),s.jsxs("p",{children:["pastikan anda berada di folder"," ",s.jsx("span",{className:"code mr-0",children:"root"}),", tandanya ada ",s.jsx("span",{className:"code",children:"~"})," setelah"," ",s.jsx("span",{className:"code",children:"#"})," seperti pada code diatas."]})]})}),s.jsx("li",{className:"mt-1",children:s.jsxs("div",{className:"flex flex-col gap-1",children:[s.jsxs("p",{children:["Masuk kedalam folder"," ",s.jsx("span",{className:"code",children:"coin"}),":"]}),s.jsx(e.Suspense,{children:s.jsx(a,{codeString:n.cdCoin,lang:"bash"})}),s.jsxs("div",{children:[s.jsx("p",{children:"Kemudian jalankan perintah build sesuai dengan platform target"}),s.jsxs("ul",{className:"u-list",children:[s.jsx("li",{children:s.jsxs("p",{children:[s.jsx("span",{className:"code",children:"buildunix.sh"})," ","untuk platform"," ",s.jsx("span",{className:"code",children:"linux"})," atau"," ",s.jsx("span",{className:"code",children:"unix"})]})}),s.jsx("li",{children:s.jsxs("p",{children:[s.jsx("span",{className:"code",children:"buildwin.sh"})," ","untuk platform"," ",s.jsx("span",{className:"code",children:"windows"})]})})]})]}),s.jsx(e.Suspense,{children:s.jsx(a,{codeString:n.build,lang:"bash"})}),s.jsx("p",{children:"tunggu sampai proses selesai."})]})})]})]})}export{p as default};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["./code.chunk.js","../../index.js","../css/index.css","./classnames.chunk.js","../css/code.css"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}