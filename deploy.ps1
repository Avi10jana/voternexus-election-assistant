# Script to deploy Election Assistant to Google Cloud Run

$PROJECT_ID = "YOUR_PROJECT_ID_HERE"
$REGION = "us-central1"
$SERVICE_NAME = "election-assistant"

Write-Host "Starting deployment to Google Cloud Run..." -ForegroundColor Cyan

# 1. Ensure gcloud is initialized and project is set
Write-Host "Setting project to $PROJECT_ID..."
gcloud config set project $PROJECT_ID

# 2. Enable necessary APIs (Cloud Build, Cloud Run, Artifact Registry)
Write-Host "Enabling required GCP APIs..."
gcloud services enable cloudbuild.googleapis.com run.googleapis.com artifactregistry.googleapis.com

# 3. Build and deploy directly using Cloud Run source deploy
# This automatically uses Cloud Build to build the Dockerfile and deploys it
Write-Host "Building and deploying service '$SERVICE_NAME'..."
gcloud run deploy $SERVICE_NAME `
    --source . `
    --region $REGION `
    --allow-unauthenticated `
    --port 8080

Write-Host "Deployment process complete. Check the URL above to access your application." -ForegroundColor Green
