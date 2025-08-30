output "kubectl-server" {
  value = aws_instance.kubectl-server[*].public_ip
}