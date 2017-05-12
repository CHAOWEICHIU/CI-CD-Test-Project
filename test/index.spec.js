import axios from 'axios'

it('shoud pass by 1', (done)=>{
  axios.get('https://jsonplaceholder.typicode.com/posts/1')
  .then(res=>{
    expect(res.data.id).toBe(1)
    done()
  })
})
it('shoud pass by 2', (done)=>{
  axios.get('https://jsonplaceholder.typicode.com/posts/2')
  .then(res=>{
    expect(res.data.id).toBe(2)
    done()
  })
})
it('shoud pass by 3', (done)=>{
  axios.get('https://jsonplaceholder.typicode.com/posts/3')
  .then(res=>{
    expect(res.data.id).toBe(3)
    done()
  })
})
