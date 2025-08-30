# terraform {
#   required_providers {
#     aws = {
#       source  = "hashicorp/aws"
#       version = "~> 6.0"
#     }
#   }
# }

# Configure the AWS Provider
provider "aws" {
  region = "us-east-1"
}

# # Backend configuration
# terraform {
#   backend "s3" {
#     bucket         = "terraform-s3-backend111"
#     key            = "path/terraform.tfstate"
#     region         = "us-east-1"
#   }
# }