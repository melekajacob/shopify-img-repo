
# QuestionVault

Submission for Shopify 2021 Intern challenge. QuestionVault is a webapp which allows users to upload images of questions (i.e. math, science, trivia) and optionally solutions along with metadata, and then provide an interface to view these questions and then the solution.

# Setup

```
git clone https://github.com/melekajacob/shopify-img-repo.git
cd shopify-img-repo/frontend
npm install
npm start
```

Now navigate to `localhost:3000` to view the application

# Architecture

QuestionVault was built as a serverless application with the following architecture...

![QuestionVault Diagram](https://user-images.githubusercontent.com/23385706/118031169-398ac880-b334-11eb-8c15-3085b58eac3b.png)

## Notes
1. Small lambdas for each major operation were used in order to limit permissions and improve scalability (lambda concurrency and resources can be tuned individually)
2. To make the application easier to use, QuestionVault automatically verifies all emails. In production this would not be the case. 

# Improvements

1. Currently bucket to store images is public, more work with signed URLs can be done to only give user access to images
2. Testing, both frontend and backend
3. More info given when viewing the solution, right now just shows the image
4. Mix of bootstrap and react-bootstrap in frontend, we need to standardize
