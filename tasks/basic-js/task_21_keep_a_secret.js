/**
There's no such thing as private properties on a coffeescript object! But, maybe there are?

Implement a function createSecretHolder(secret) which accepts any value as secret and returns an object with ONLY two methods

getSecret() which returns the secret
setSecret() which sets the secret
obj = createSecretHolder(5)
obj.getSecret() # returns 5
obj.setSecret(2)
obj.getSecret() # returns 2
 */

// Variant 1
function createSecretHolder(secret) {
    let sold = secret;
    this.getSecret = () => {
        return sold;
    }
    this.setSecret = (secret) => {
        sold = secret;
    }
    return this;
}

// Variant 2
function createSecretHolder(secret) {
    let sold = secret;
    return {
        getSecret() {
            return sold;
        },
        setSecret(secret) {
            sold = secret;
        }
    }
}