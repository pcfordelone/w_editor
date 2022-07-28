import { Editor } from "@tinymce/tinymce-react";
import parse from "html-react-parser";

import { Coffee } from "phosphor-react";
import { useRef, useState } from "react";
import { notify } from "../../utils/notification";
import { Container, InputContainer } from "./styles";

export const Content = () => {
  const editedTextDivRef = useRef<HTMLDivElement>(null);
  const [text, setText] = useState<string>("");

  const handleEditorChange = async (content: any, editor: any) => {
    const editorText: string = content;
    const updatedText = await editHTMLTags(editorText);
    console.log(content);

    setText(updatedText);
  };

  const editHTMLTags = async (value: string) => {
    const editedText = value
      .replaceAll("<br>", " ")
      .replaceAll("&nbsp;</strong>", "* ")
      .replaceAll("&nbsp;</strong></em>", "*_ ")
      .replaceAll("&nbsp;</em>", "_ ")
      .replaceAll("&nbsp;</s>", "~ ")
      .replaceAll("<strong>", "*")
      .replaceAll("</strong>", "*")
      .replaceAll("<em>", "_")
      .replaceAll("</em>", "_")
      .replaceAll("<s>", "~")
      .replaceAll("</s>", "~");

    return editedText;
  };

  const handleCopyToClipboard = () => {
    navigator.clipboard.writeText(editedTextDivRef.current?.innerText || "");
    notify("Text copied successfully", "success");
  };

  return (
    <Container>
      <h2>Write your text, style it and copy it to your WhatsApp! 🤟🏻🤟🏻🤟🏻</h2>
      <p>Use Ctrl/Command + B for bold and Ctrl/Command + I for italic</p>

      <InputContainer>
        <div className="editorContainer">
          <Editor
            tinymceScriptSrc={"/tinymce/tinymce.min.js"}
            initialValue=""
            onEditorChange={handleEditorChange}
            init={{
              height: "100%",
              width: "100%",
              max_height: 500,
              menubar: false,
              placeholder: "Write anything here",
              resize: false,
              plugins: [
                "emoticons",
                "advlist",
                "autolink",
                "link",
                "charmap",
                "anchor",
                "searchreplace",
                "visualblocks",
                "code",
                "preview",
                "help",
                "wordcount",
                "lists",
              ],
              toolbar: "bold italic strikethrough emoticons",
              theme: "silver",
            }}
          />
        </div>

        <div className="renderedText">
          <div ref={editedTextDivRef}>{parse(text)}</div>
          <button onClick={handleCopyToClipboard}>COPY</button>
        </div>
      </InputContainer>

      <div className="ads">
        <p>Ads Area</p>
      </div>

      <a
        href="https://www.buymeacoffee.com/pcfordelone"
        target="_blank"
        className="buyMeACoffee"
      >
        <Coffee size={40} />
        Buy me a coffee
      </a>
    </Container>
  );
};
