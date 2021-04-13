function main(params) {
    const received = Date.now();
    const payload = params;
    const response = {
        kind: "rest",
        invoked: 0,
        received: 0,
        requestTime: 0,
        account: "",
        metadata: {vpc: "false", provisioned: "false"}
    };
    response.received = received;
    response.invoked = payload.invoked;
    response.requestTime = Date.now();
    response.metadata.protocol = "http/1";
    return {body: response, statusCode: 200, headers: {"Content-Type": "application/json"}};
}