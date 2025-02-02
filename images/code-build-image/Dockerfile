FROM python:3.8.7-slim-buster

ARG CDK_VERSION=1.67.0

RUN apt -y update && \
    # Install dependencies
    apt -y install curl unzip docker.io wget && \
    # Install NodeJS
    curl -sL https://deb.nodesource.com/setup_12.x | bash - && \
    apt -y install nodejs && \
    # Install AWSCLIv2
    curl "https://awscli.amazonaws.com/awscli-exe-linux-x86_64.zip" -o "awscliv2.zip" && \
    unzip awscliv2.zip && \
    ./aws/install

# Install EKSCTL
RUN curl --location "https://github.com/weaveworks/eksctl/releases/latest/download/eksctl_$(uname -s)_amd64.tar.gz" | tar xz -C /tmp && \
    mv /tmp/eksctl /usr/local/bin

# Install KubeCTL
RUN curl -LO "https://storage.googleapis.com/kubernetes-release/release/$(curl -s https://storage.googleapis.com/kubernetes-release/release/stable.txt)/bin/linux/amd64/kubectl" && \
    chmod +x ./kubectl && mv ./kubectl /usr/local/bin/kubectl

# Install Helm tools
RUN curl -sSL https://raw.githubusercontent.com/helm/helm/master/scripts/get-helm-3 | bash && \
    helm version --short && \
    helm repo add stable https://charts.helm.sh/stable

RUN npm install -g aws-cdk@$CDK_VERSION yarn

RUN pip install kubernetes~=12.0.0 \
                aws_cdk.core~=$CDK_VERSION \
                aws-cdk.aws-ec2~=$CDK_VERSION \
                aws-cdk.aws-s3~=$CDK_VERSION \
                aws-cdk.aws-iam~=$CDK_VERSION \
                aws-cdk.aws-efs~=$CDK_VERSION \
                aws-cdk.aws-ecr~=$CDK_VERSION \
                aws-cdk.aws-ecs~=$CDK_VERSION \
                aws-cdk.aws-ssm~=$CDK_VERSION \
                aws-cdk.aws-kms~=$CDK_VERSION \
                aws-cdk.aws-cognito~=$CDK_VERSION \
                aws-cdk.aws-lambda~=$CDK_VERSION \
                aws-cdk.aws-lambda-python~=$CDK_VERSION \
                aws-cdk.aws-stepfunctions~=$CDK_VERSION \
                aws-cdk.aws-stepfunctions-tasks~=$CDK_VERSION

ENTRYPOINT ["bash"]