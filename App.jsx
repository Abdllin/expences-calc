import { Layout } from "antd";
import HeaderApp from "./HeaderApp";
import ContentApp from "./ContentApp";
export default function App() {
  return (
    <Layout.Content>
      <HeaderApp />
      <Layout.Content>
        <ContentApp />
      </Layout.Content>
    </Layout.Content>
  );
}
