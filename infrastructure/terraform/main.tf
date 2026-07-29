resource "local_file" "deployment_info" {
  filename = "deployment-${var.environment}.txt"

  content = <<EOF
Aplicacion: ${var.app_name}
Ambiente: ${var.environment}

Infraestructura creada con Terraform.

Componentes:
- Kubernetes
- Docker
- Jenkins CI/CD
- Monitoring
- Auto Scaling
EOF
}