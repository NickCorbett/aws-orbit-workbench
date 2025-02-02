#!/usr/bin/env bash
#
# Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
#
#   Licensed under the Apache License, Version 2.0 (the "License").
#   You may not use this file except in compliance with the License.
#   You may obtain a copy of the License at
#
#       http://www.apache.org/licenses/LICENSE-2.0
#
#   Unless required by applicable law or agreed to in writing, software
#   distributed under the License is distributed on an "AS IS" BASIS,
#   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
#   See the License for the specific language governing permissions and
#   limitations under the License.
#

set -ex

AWS_ACCESS_KEY_ID=$(aws --profile default configure get aws_access_key_id)
AWS_SECRET_ACCESS_KEY=$(aws --profile default configure get aws_secret_access_key)
AWS_DEFAULT_REGION=$(aws configure get region)

docker run \
    -e AWS_ACCESS_KEY_ID=${AWS_ACCESS_KEY_ID} \
    -e AWS_SECRET_ACCESS_KEY=${AWS_SECRET_ACCESS_KEY} \
    -e AWS_DEFAULT_REGION=${AWS_DEFAULT_REGION} \
    -e ENV_NAME=my-env \
    -e USER_POOL_ID=PLACEHOLDER \
    -e USER_POOL_CLIENT_ID=PLACEHOLDER \
    -e IDENTITY_POOL_ID=PLACEHOLDER \
    -e COGNITO_EXTERNAL_PROVIDER=okta \
    -e COGNITO_EXTERNAL_PROVIDER_LABEL=OKTA \
    -e COGNITO_EXTERNAL_PROVIDER_DOMAIN=PLACEHOLDER \
    -e COGNITO_EXTERNAL_PROVIDER_REDIRECT=http://localhost:8080/ \
    -p 8080:80 \
    --rm \
    -it \
    orbit-landing-page
