# Git 操作筆記
## 開始之前
### 設定你是誰
> $ git git config -global user.name “YourName”

> $ git git config -global user.email “YourEmail”

或

> $ git config --global --edit

### 檢視設定
> $ git config --list

也可以直接檢視 .git 資料夾下的 config

---
## 建立或取得Git Repository
###  於當前位子建立 Repository
> $ git init

### 複製遠端 Repository 至本機
> $ git clone [git-repository-url]

## 新增檔案
### 將指定檔案add進stage
> $ git add [filename]

或可使用 * 字元加入所有檔案

> $ git add *


### add錯檔案想取消（unstage）
> $ git reset HEAD [filename]

或

> $ git rm [filename] --cached


### commit

> $ git commit -m "[commit message]"

### 更改上一次的commit messgage

> $ git commit --amend

### 只有小修正不想重新commit
將這次修改並入上次commit
> $ git add [file]

> $ git commit --amend -m "[commit message]"

### 查看Repository狀態

能查看目前位於哪個*branch*，未commit的更變檔案
> $ git status

---

## 遠端操作

### 新增遠端節點
> $ git remote add origin

### 刪除遠端節點
> $ git remote rm origin

### 檢視遠端節點
> $ git remote -v

### 上傳
> $ git push origin master
此處是指定origin master

### 上傳分支
> $ git push origin [branch-name]

### 刪除遠端某分支
> $ git push origin :[branch-name]

### 下載更新（PULL）
> $ git pull origin master
此處是指定origin master

---

## 分支
分支用在專案多人分工，或是添加新功能可以新增版本分支，beta版或feature版

### 檢視目前分支
> $ git branch

### 建立分支
> $ git branch [branch-name]

### 刪除分支
> $ git branch -d [branch-name]

### 切換至某分支
> $ git checkout [-b] [branch-name]

若無該分支則建立並切換至該分支：-b

### 合併分支
要先 checkout 到要合併的主分支
> $ git merge [branch-name]

### 檢視已合併的分支
> $ git branch --merged
---

## 特殊用途

### GitIgnore
在Repository的根目錄下新增檔案.gitigonre
檔案內容為要忽略的檔案名稱或資料夾，可以避免把一些測試用檔案或npm模組也放入Repository導致肥大。
> $ echo "node_modules" >> .gitignore

### 檢視commit紀錄
檢視分支圖：--graph, 單行檢視：--oneline
> $ git log [--graph] [--oneline]

檢視單一檔案
刪減檢視：-p
> $ git log [-p] [filename]

### commit 空資料夾

Git 預設無法commit空資料夾，在資料夾下新增.keep或.gitkeep檔案即可。

> $ touch .gitkeep


### 新增標籤
> $ git tag 1.0.0

### 檢視標籤
> $ git tag


### 抓戰犯
誰寫的code拖去斬了
> $ git blame [filename]

### 暫存
> $ git stash save
### 取出上次的暫存
> $ git stach apply
### 刪除上次的暫存
> $ git stach drop



---
Reference:

[人生不能重來 但Git可以](https://drive.google.com/file/d/0B8D_Wyag7W2ONW10REkxRXJ0bms/view)
