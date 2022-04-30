# Secure-Chat-Application
Secure Chat Application using node Js. Concepts used - Diffie Hellman And AES encryption

![Badge](https://img.shields.io/badge/NodeJs-16.13.1-green)
![badge](https://img.shields.io/badge/Express-16.0.1-blue)
![badge](https://img.shields.io/badge/Vscode-2021.1.2-orange)
![badge](https://img.shields.io/badge/MongoDB-Database-yellow)

# Abstract💡

Security is one of the most vital concerns of any interaction, especially in the
current scenario with the extensive rise in the usage of the internet. So, an effective
text encryption algorithm is needed for achieving an immense amount of privacy.
In this context, we propose a secure text encryption algorithm using an enhanced
version of Diffe-Hellman and AES. By improving the Diffie-Hellman key
exchange Algorithm, we can help in generating a secret key that is highly secure.
This key can then be used in the AES algorithm to perform the encryption and
decryption operations on a text.
The expected output of the experiment shall define that the advanced version of the
deffie-hellman and AES will perform better than the standard encryption models
for making secure communication and encryption. Also the final result shall
contain the comparison of different algorithms on the basis of time and input data.


# Technologies used 👨‍💻

Diffie-Hellman - This algorithm is used to establish shared secrets that can be
used for private communications while exchanging data over a public network.
Diffie-Hellman’s purpose is to make two parties exchange a session key over a
large teleprocessing network.
Advanced Encryption Standard (AES) - It is a specification for the
encryption of electronic data established by the U.S NAtional Institute of Standards
and Technology (NIST) in 2001. AES is a block cipher, key size can be
128/192/256 bits and it encrypts data in blocks of 128 bits each.
4
Rivest, Shamir, Adleman (RSA) - A public key encryption technique used for
secure data transmission over the internet. Developed by scientists Rivest, Shamir
and Adleman in 1978. In this algorithm, a code is added to the normal message for
security purposes. It works on the principle of factorization of large numbers,
which cannot be factorized easily, hence making the message secure against
intruders.

# Dependencies Used 📚
    "body-parser": "^1.19.0",
    "cookie-parser": "^1.4.5",
    "crypto": "^1.0.1",
    "ejs": "^3.1.6",
    "express": "^4.17.1"
    "mongoose": "^6.0.9"


# Standards Followed✅

* Global variables have a limited use
* Standard headers for different modules have been mentioned
* All naming conventions for local, global variables have been followed
* Functions, dependencies and libraries have been clearly stated and named
* Proper indentation has been followed throughout the codes
* Exception and error handling measures have been taken for backend and frontend codes
* No identifier has a multiple usage
* GOTO statements are not used
* Codes are well documented
* High congestion, low coupling used
* Modularity maintained by reusing functions to create multiple cards and info pages.

# How to Use🤝

1. Run the clone command to download the repository into your local directory.
```
$ git clone https://github.com/Devang-exe/Secure-Chat-Application.git
```
2. Open the project with any IDE that supports Node Js and Express for e.g VsCode
3. Run the project using **npm install** and then **nodemon server.js** or **node server.js** .
4. Make sure Node Js and MongoDB is installed in your machines.

## Images
### Home Page
![](Images/1.png)
### SignIn Page
![](Images/2.png)
### SignUp Page
![](Images/3.png)
### User Page
![](Images/4.png)
### Admin Page
![](Images/5.png)
![](Images/6.png)

# Conclusion💥

Diffie–Hellman key exchange (DH) is a method of securely exchanging
cryptographic keys over a public channel and is one of the first public-key
protocols. DH is one of the earliest practical examples of public key exchange
implemented within the field of cryptography.

In the public key cryptosystem, enciphering and deciphering are governed by
distinct keys, E and D, such that computing D from E is computationally infeasible
(e.g., requiring more than 10^100 instructions). The enciphering key E can thus be
publicly disclosed without compromising the deciphering key D. This was the
main ideology behind the Diffie-Hellman Key Exchange Protocol. Each user of the
network can, therefore, place his enciphering key in a public directory. This
enables any user of the system to send a message to any other user enciphered in
such a way that only the intended receiver can decipher it. As such, a public key
cryptosystem is a multiple access cipher.

A private conversation can therefore be held between any two individuals
regardless of whether they have ever communicated before. Each one sends
messages to the other enciphered in the receiver’s public enciphering key and
deciphers the messages he receives using his own secret deciphering key.
In general, we’ve found that the Diffie-Hellman algorithm makes it easier for
exchanging the secret key generated which can then be used in symmetric
algorithms like AES to perform the encryption and decryption operations.
But the general Deffie-Hellman is prone to several attacks making it unreliable for
performing the secret key exchange. Our proposed methodology will be
impenetrable for the above-mentioned attacks. We will use the key generated in
symmetric algorithms like AES and make it even more secure. Our proposed
scheme eliminates the overheads of key computation and their management.
Provision of security to the user’s data on the cloud empowers the Data owner to
outsource the data to save.

# REFERENCES
Stack Overflow https://stackoverflow.com/
Quora https://www.quora.com/
Brainly https://brainly.in/
YouTube https://www.youtube.com/


