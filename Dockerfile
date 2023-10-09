FROM mcr.microsoft.com/playwright:v1.34.3-jammy

WORKDIR /app

COPY package.json package-lock.json ./

RUN npm ci

#Install chrome on the container
RUN npx playwright install chrome

COPY . .

#Add user named "tester"
RUN useradd -m tester

#Giving Read/Write perms to the project "/app"
RUN chown -R tester /app

#Switch from root to tester
USER tester

# Run test
CMD ENV=qa npx playwright test --project=chrome