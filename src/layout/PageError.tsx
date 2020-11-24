import React from "react";
import { Result, Button } from "antd";
import { useHistory } from "react-router-dom";

export default function PageError() {
  const history = useHistory();
  return (
    <div className="error__page">
      <Result
        status="500"
        title="500"
        subTitle="Sorry, something went wrong."
        extra={
          <Button type="primary" onClick={() => history.push("/")}>
            Back Home
          </Button>
        }
      />
    </div>
  );
}
