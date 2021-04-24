package main

import (
	"bytes"
	"context"
	"encoding/base64"
	"encoding/json"
	"image/png"

	"github.com/aws/aws-lambda-go/events"
	"github.com/aws/aws-lambda-go/lambda"
	"github.com/boombuler/barcode"
	"github.com/boombuler/barcode/qr"
)

func HandleLambdaEvent(ctx context.Context, request events.APIGatewayProxyRequest) (events.APIGatewayProxyResponse, error) {
	resp := events.APIGatewayProxyResponse{Headers: make(map[string]string)}
	resp.Headers["Access-Control-Allow-Origin"] = "*"

	var acceptedParams struct {
		Input string
	}

	json.Unmarshal([]byte(request.Body), &acceptedParams)

	if len(acceptedParams.Input) > 256 {
		resp.Body = "Input should not be exceed length of 256."
		resp.StatusCode = 400
	} else {
		qrCode, err := qr.Encode(acceptedParams.Input, qr.Q, qr.Auto)
		if err != nil {
			resp.Body = "Something bad happened. Please try again with different input."
			resp.StatusCode = 500
		} else {
			qrCode, _ = barcode.Scale(qrCode, 400, 400)

			buf := new(bytes.Buffer)
			png.Encode(buf, qrCode)

			encoded := base64.StdEncoding.EncodeToString(buf.Bytes())
			resp.Body = encoded
			resp.StatusCode = 200
		}
	}

	return resp, nil
}

func main() {
	lambda.Start(HandleLambdaEvent)
}
