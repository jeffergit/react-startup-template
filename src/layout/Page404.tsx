import React from "react";
import { Result, Button } from "antd";
import { useHistory } from "react-router-dom";

export default function Page404() {
  const history = useHistory();
  return (
    <div className="error__page">
      <Result
        status="404"
        title="404"
        subTitle="Sorry, the page you visited does not exist."
        extra={
          <Button type="primary" onClick={() => history.push("/")}>
            Back Home
          </Button>
        }
      />
    </div>
  );
}
