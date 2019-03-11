# Bank-Tech-Test

```
                                      ,
                                   ,nNN
                                ,nNNNN'
                             ,nNNNNNN;
                            ;NNNNNNNN
                           ;NNNNNNNN'
                          ;NNNNNNNN;
                         .NNNNNNNNN
                         NNNNNNNNNb.
                        ;NNNNNNNNNNNNn.
                       ,NNNNNNNNNNNNNNNNn.
                      ;NNNNNNNNN' ""YNNNNNNn.
                      NNNNNNNNN;      ""YNNNNNNn.
                      ""YNNNNNN           ""YNNNNNNn.
                          ""YN'               ""YNNNNNNn.
            /\                                    ""YNNNNNNn.
        .nNNNNNb. _______                             ""YNNNNNNn.
       dN(o)NNNNNNNNN"NNNNNNb.                            ""YNNNNNNn.
     dNNNNNNNNNNNNNP" ""NNNNNNb _                             ""cgmmP
     YNNNN"NNNNNNNN N NNNNNNNNN( )                                ""
       ""'dNNNNNNNNb. "YNNNNNNN_X_
         ,NNNNNNNNNNN N NNNNNNN
            YNNNNNN.. .dNNNNNNP
             "YNNNNNN.NNNNNNP"
                NN """"" NN
               ,nn      ,nn
```
## Aims and Objectives
The aim of this project is to deliver a solution for the Bank Tech Test set in Week 10 of the Makers Academy course.

I will code my app in JavaScript as I want to get more practice in this language and framework, testing with Jasmine in the browser console.

This will be done as a solo project to meet the requirement of the test.

## Languages and Frameworks
JavaScript ES5 and Jasmine, Chrome browser console

## Given Specification

### Requirements

- You should be able to interact with your code via a REPL like IRB or the JavaScript console. (You don't need to implement a command line interface that takes input from - STDIN.)
- Deposits, withdrawal.
- Account statement (date, amount, balance) printing.
- Data can be kept in memory (it doesn't need to be stored to a database or anything).

### Acceptance criteria

**Given** a client makes a deposit of 1000 on 10-01-2012

**And** a deposit of 2000 on 13-01-2012

**And** a withdrawal of 500 on 14-01-2012

**When** she prints her bank statement

**Then** she would see

```
date || credit || debit || balance
14/01/2012 || || 500.00 || 2500.00
13/01/2012 || 2000.00 || || 3000.00
10/01/2012 || 1000.00 || || 1000.00
```

## My Assumptions
I will use current dates, it is clear that the given dates a just examples for a historical bank account statement.