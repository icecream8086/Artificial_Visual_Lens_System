<template>
  <div>
    <el-card>
      <el-text style="font-size: 20px; font-weight: bold;">{{titles}}</el-text>
      <div v-html="html"></div>
    </el-card>
  </div>
</template>

<script>
import MarkdownIt from 'markdown-it'
import axios from 'axios'
import hljs from 'highlight.js'


export default {
  
  data() {
    return {
      html: '<p> Request Markdown File is Null or Empty </p>',
      titles:this.title
    }
  },
  props: {
/**
 * @description: 文档路径
 * @param {type}
 * @return:
 * 
 */
// demo '/api/file/downloadFile/test_DAG.md'
// demo '/api/file/downloadFile/FileControl.md'

    /**
     * @description This component represents the manual page and contains the URL to the documentation file and the title of the page.
     * @prop {String} doc_url - The URL to the documentation file. Default value is ''.
     * @prop {String} title - The title of the manual page. Default value is 'Manual'.
     */
    doc_url: {
      type: String,
      default: ''
    },
    title: {
      type: String,
      default: 'Manual'
    }
  },
  mounted() {
    axios.post('/api' + this.doc_url)
      .then(response => {
        const md = new MarkdownIt({
          highlight: function (str, lang) {
            if (lang && hljs.getLanguage(lang)) {
              try {
                return '<pre class="hljs"><code>' +
                       hljs.highlight(lang, str, true).value +
                       '</code></pre>';
              } catch (__) {
                console.error(__)
              }
            }

            return '<pre class="hljs"><code>' + md.utils.escapeHtml(str) + '</code></pre>';
          }
        })
        this.html = md.render(response.data)
      })
      .catch(error => {
        console.error(error)
      })
  }
}
</script>

<style>
@import "~highlight.js/styles/github.css";
pre.hljs {
  background-color: #1e1e1e;
  color: white;
}



pre.hljs .hljs-comment {
  color: #1e1e;
}
pre.hljs .hljs-keyword {
  color: #569cd6;
}

pre.hljs .hljs-string {
    /* 字符串 */
  color: #d69d85;
}

pre.hljs .hljs-number {
  color: #b8d7a3;
}

pre.hljs .hljs-attribute {
  color: rgb(255, 0, 170);
}

pre.hljs .hljs-literal {
  color: rgb(13, 213, 240);
}

pre.hljs .hljs-bullet {
  color: rgb(0, 102, 255);
}

pre.hljs .hljs-code {
  color: rgb(183, 216, 50);
}

pre.hljs .hljs-regexp {
  color: rgb(87, 110, 225);
}

pre.hljs .hljs-selector-tag {
  color: rgb(255, 0, 170);
}

pre.hljs .hljs-function {
  color: rgb(183, 216, 50);
}
pre.hljs .hljs-title {
  /* 方法 */
  color: rgb(13, 213, 240);
}
pre.hljs .hljs-params {
  /* 参数 */
  color: rgb(255, 0, 170);
}
pre.hljs .hljs-attr {
  /* 属性 */
  color: rgb(255, 0, 170);
}
pre.hljs .hljs-regexp {
  /* 正则 */
  color: rgb(87, 110, 225);
}


pre.hljs .hljs-symbol {
  color: rgb(0, 255, 195);
}


pre.hljs .hljs-variable {
  /* 变量 */
  color: #4ec992;
}


/* 修改字体 */
pre.hljs code {
  font-family: Consolas, Monaco, 'Andale Mono', 'Ubuntu Mono', monospace;
  font-size: 14px;
}
/* 添加边框 */
pre.hljs {
  border: 1px solid #409EFF;
  border-left: 3px solid #409EFF;
  border-radius: 3px;
  padding: 0.5em;
  margin: 0.5em 0;
  overflow: auto;
}
</style>