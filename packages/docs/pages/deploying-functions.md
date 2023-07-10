---

    title: Deploying functions
    description: 
    outline: 'deep'
---

# Deploying functions

You can deploy function to `Edgeable` using any of the following methods.

## Dashboard

The easiest way is to do the whole process including the editing part is by using
`Edgeable` [dashboard](./via-dashboard.md).

## CLI

The most common, and the one you'll probably use the most is through `Edgable` [CLI](./via-cli.md).

## Github

Deploying through [GitHub](./via-github.md) is very easy and can easily integrated into your CI/CD pipeline.

### Actions

The easy one, is to use [GitHub actions](./via-github.md#using-action) and deploy the function to your `Edgeable` instance
by using `Edgeable` cli.

### Webhook (On push)

Or you can add your function Webhook URL to your GitHub repo to make sure your function
will get deployed for each time the default branch is being [merger/pushed](./via-github.md#on-push). 