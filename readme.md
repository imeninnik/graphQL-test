## Run and Install
#### Install   
`npm i` 

#### Run
`node .`   

#### Try At
`localhost:3001`

## Commands to try
```
{
  invoices {
    invoice_id
    status
    item_id {
      item_id
      item_name
    }
  } 
}

```
```
{
  items {
    item_name
    frequently_bought_with {
      item_name
    }
  }
}

```
```
{
  items {
    item_name
    total_sold_today
    total_sold_per_week
    total_sold_per_month
    
  }
}

```