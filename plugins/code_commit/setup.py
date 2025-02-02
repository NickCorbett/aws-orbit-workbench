#  Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
#
#    Licensed under the Apache License, Version 2.0 (the "License").
#    You may not use this file except in compliance with the License.
#    You may obtain a copy of the License at
#
#        http://www.apache.org/licenses/LICENSE-2.0
#
#    Unless required by applicable law or agreed to in writing, software
#    distributed under the License is distributed on an "AS IS" BASIS,
#    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
#    See the License for the specific language governing permissions and
#    limitations under the License.

from io import open

from setuptools import setup

with open("VERSION", "r") as version_file:
    version = version_file.read().strip()

setup(
    name="aws-orbit-code-commit",
    version=version,
    author="AWS Professional Services",
    author_email="aws-proserve-opensource@amazon.com",
    url="https://github.com/awslabs/aws-orbit-workbench",
    project_urls={"Org Site": "https://aws.amazon.com/professional-services/"},
    description="Orbit Workbench CodeCommit Plugin.",
    license="Apache License 2.0",
    packages=["code_commit"],
    keywords=["aws", "cdk"],
    python_requires=">=3.6, <3.9",
    classifiers=[
        "Development Status :: 4 - Beta",
        "Framework :: Jupyter",
        "Intended Audience :: Developers",
        "Intended Audience :: Information Technology",
        "Intended Audience :: Science/Research",
        "License :: OSI Approved :: Apache Software License",
        "Programming Language :: Python :: 3 :: Only",
        "Programming Language :: Python :: 3.7",
        "Programming Language :: Python :: 3.8",
        "Typing :: Typed",
    ],
    install_requires=[
        "aws-cdk.aws-codecommit~=1.67.0",
        "aws-cdk.aws-iam~=1.67.0",
    ],
    include_package_data=True,
)
