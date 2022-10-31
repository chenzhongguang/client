import "./publish.scss";
import "@wangeditor/editor/dist/css/style.css";
import { Editor, Toolbar } from "@wangeditor/editor-for-react";
import { IDomEditor, IEditorConfig, IToolbarConfig } from "@wangeditor/editor";
import Footer from "../../Components/Footer";
import Backtop from "../../Components/Backtop";
import { Upload } from "antd";
import { ContainerOutlined, PlusOutlined } from "@ant-design/icons";
import type { UploadProps } from "antd/es/upload/interface";
import { useState, useEffect } from "react";
import axios from "axios";

export default function Publish() {
  const [imageUrl, setImageUrl] = useState<string>("");
  const [title, setTitle] = useState<string>("");
  // 主图上传
  const props: UploadProps = {
    name: "file",
    action: "http://127.0.0.1:7001/uploadFile",
    headers: {
      authorization: "authorization-text",
    },
    onChange(info) {
      if (info.file.status === "done") {
        let newImg = info.file.response.data.url;
        setImageUrl(newImg);
      }
    },
  };
  // editor 实例
  const [editor, setEditor] = useState<IDomEditor | null>(null);
  // 编辑器内容
  const [html, setHtml] = useState("");
  // 模拟 ajax 请求，异步设置 html
  useEffect(() => {
    setTimeout(() => {
      setHtml(html);
    }, 500);
  }, [html]);

  // 工具栏配置
  const toolbarConfig: Partial<IToolbarConfig> = {};
  // 编辑器配置
  const editorConfig: Partial<IEditorConfig> = {
    placeholder: "请输入正文",
    MENU_CONF: {},
  };
  if (editorConfig.MENU_CONF) {
    editorConfig.MENU_CONF["uploadImage"] = {
      server: "http://127.0.0.1:7001/uploadFile",
    };
  }
  // 及时销毁 editor ，重要！
  useEffect(() => {
    return () => {
      if (editor == null) return;
      editor.destroy();
      setEditor(null);
    };
  }, [editor]);

  // 发布
  async function publish(e: any) {
    e.preventDefault();
    try {
      //封装数据
      let formData = new FormData();
      formData.append("mainpic", imageUrl);
      formData.append("title", title);
      formData.append("content", html);
      let res = await axios.post("http://localhost:7001/publish", formData);
      let data = res.data;
      console.log(data);
    } catch (e) {
      console.log(e);
    }
  }
  // 草稿
  async function draft(e: any) {
    e.preventDefault();
    try {
      //封装数据
      let formData = new FormData();
      formData.append("mainpic", imageUrl);
      formData.append("title", title);
      formData.append("content", html);
      formData.append("status", "0");
      let res = await axios.post("http://localhost:7001/draft", formData);
      let data = res.data;
      console.log(data);
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <div className="publish-box">
      <div className="article_top">
        <div className="article_nav">
          <ul>
            <li>
              <h4>写文章</h4>
            </li>
            <li>
              <span className="shu"></span>
            </li>
            <li>
              <p>数字生活美文</p>
            </li>
          </ul>
          <div className="ar">
            <div className="write" onClick={draft}>
              <h5>草稿</h5>
            </div>
            <div className="write" onClick={publish}>
              <h5>发布</h5>
            </div>
          </div>
        </div>
      </div>
      <div className="pub-content">
        <div className="upload">
          <Upload {...props}>
            {imageUrl ? (
              <img
                src={imageUrl}
                alt="主图"
                style={{ width: "500px", height: "500px" }}
              />
            ) : (
              <div className="avatar-uploader">
                <PlusOutlined style={{ fontSize: "20px" }} />
              </div>
            )}
          </Upload>
        </div>
        <div className="head-title">
          <input
            type="textarea"
            placeholder="请输入标题"
            className="input-title"
            onChange={(e: any) => {
              setTitle(e.target.value);
            }}
          />
        </div>
        <div className="editer">
          <div style={{ zIndex: 100, backgroundColor: "#fcfcfc" }}>
            <Toolbar
              editor={editor}
              defaultConfig={toolbarConfig}
              mode="default"
              style={{
                borderBottom: "1px solid #ccc",
                borderTop: "1px solid #ccc",
              }}
            />
            <Editor
              defaultConfig={editorConfig}
              value={html}
              onCreated={setEditor}
              onChange={(editor) => setHtml(editor.getHtml())}
              mode="default"
              style={{
                height: "100%",
                overflowY: "hidden",
                backgroundColor: "#fcfcfc",
              }}
            />
          </div>
        </div>
      </div>
      <Footer />
      <Backtop />
    </div>
  );
}
