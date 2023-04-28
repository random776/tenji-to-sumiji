import useTypedBrailleStrings from "./components/useTypedBrailleStrings";
import * as Tenji from 'tenji'
import { TextField } from "@mui/material";

export default function App(): JSX.Element {
  const [typedBrailleStrings, setTypedBrailleStrings] =
    useTypedBrailleStrings();
  return (
    <>
      <h2>点字（漢字対応）仮ツール</h2>
      <p>点字を入力してください。</p>
      <p>例：東京大学教養学部学生支援課： ⠱⣎⣁⠾⠱⢞⣉⡵⢸⢵⡘⣉⣣⢪⣉⢷⠎⣃⠌⡷⢘⠗⡪</p>
      <TextField
        variant="outlined"
        value={typedBrailleStrings}
        onKeyDown={(e) => {
          setTypedBrailleStrings(e);
        }}
        onKeyUp={(e) => {
          setTypedBrailleStrings(e);
        }}
      />
      <p>
        結果：{Tenji.fromTenji(typedBrailleStrings, {kanji: true})}
      </p>
    </>
  );
}