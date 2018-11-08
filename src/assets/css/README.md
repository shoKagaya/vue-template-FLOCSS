# cssルール

## 設計思想

FLOCSSルールを使用する


1. Foundation - reset/normalize/base...
2. Layout - header/main/sidebar/footer...
3. Object
  1. Component - grid/button/form/media...
  1. Project - articles/ranking/promo...
  1. Utility - clearfix/display/margin...


### 1.Foundation
Reset.cssやNormalize.cssなどを用いたブラウザのデフォルトスタイルの初期化や、プロジェクトにおける基本的なスタイルを定義します。 ページの下地としての全体の背景や、基本的なタイポグラフィなどが該当します。

### 2.Layout
ページを構成するヘッダーやメインのコンテンツエリア、サイドバーやフッターといったプロジェクト共通のコンテナーブロックのスタイルを定義します。

`l-` プレフィックスを付ける。

### 3.Object
OOCSSのコンセプトを元に、プロジェクトにおける繰り返されるビジュアルパターンをすべてObjectと定義します。

FLOCSSでのObjectは、さらに次の3つのレイヤーに分けられます。


#### 1. Component
再利用できるパターンとして、小さな単位のモジュールを定義します。

一般的によく使われるパターンであり、例えばBootstrapのComponentカテゴリなどに見られるbuttonなどが該当します。

出来る限り、最低限の機能を持ったものとして定義されるべきであり、それ自体が固有の幅や色などの特色を持つことは避けるのが望ましいです。


#### 2. Project
プロジェクト固有のパターンであり、いくつかのComponentと、それに該当しない要素によって構成されるものを定義します。

一覧や、ユーザープロフィール、画像ギャラリーなどコンテンツを構成する要素などが該当します。


#### 3. Utility
ComponentとProjectレイヤーのObjectのモディファイアで解決することが難しい・適切では無い、わずかなスタイルの調整のための便利クラスなどを定義します。

### Objectのプレフィックス
Objectレイヤーの中で分類されるモジュールに対し、役割を明確にするためにプレフィックスをつけることを推奨します。

Component - .c-*
Project - .p-*
Utility - .u-*

## クラス命名規則
MindBEMding
https://csswizardry.com/2013/01/mindbemding-getting-your-head-round-bem-syntax/

Block、Element、Modifierに分類して構成される規則を採用します。

Modifierの命名の派生パターンとして、JavaScriptで操作されるような「状態」を表すようなModifierについては、SMACSSのStateパターンの命名を拝借し、is-*プレフィックスを付与し、.is-activeというようにすることもできます。

```
例
<button class="c-button is-active">Save</button>

.c-button { ... }
.c-button.is-active { ... }

```
