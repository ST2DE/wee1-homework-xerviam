# Git 操作筆記
## 開始之前
#### 設定你是誰
> $ git git config -global user.name “YourName”

> $ git git config -global user.email “YourEmail”

#### 檢視設定
> $ git config --list

也可以直接檢視 .git 資料夾下的 config

---
## 建立或取得Git Repository
####  於當前位子建立 Repository
> $ git init

#### 複製遠端 Repository 至本機
> $ git clone [git-repository-url]

## 新增檔案
#### 將指定檔案add進stage
> $ git add [filename]

或可使用 * 字元加入所有檔案

> $ git add *


#### add錯檔案想取消（unstage）
> $ git reset HEAD [filename]

或

> $ git rm [filename] --cached


#### commit

> $ git commit -m "[commit message]"

#### 更改上一次的commit messgage

> $ git commit --amend

#### 只有小修正不想重新commit
將這次修改並入上次commit
> $ git add [file]

> $ git commit -m --amend "[commit message]"

#### 查看Repository狀態

能查看目前位於哪個*branch*，未commit的更變檔案
> $ git status



## 特殊用途

#### GitIgnore
在Repository的根目錄下新增檔案.gitigonre
檔案內容為要忽略的檔案名稱或資料夾，可以避免把一些測試用檔案或npm模組也放入Repository導致肥大。
> $ echo "node_modules" >> .gitignore
