import { useState , useEffect } from 'react';

import Blog from '../Blog/Blog.component'

import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

import { getBlogData } from '../../api/Blog'

import './BlogsList.styles.scss'

const BlogsList = () => {
    const [blogsData , setBlogsData] = useState([])

    useEffect(()=>{
        getBlogData().then(res=>{
            setBlogsData(res.data)
        })
    },[])
    
    return (
        <>
            <section>
                {blogsData.map(blog => {
                    return <Blog {...blog}></Blog>
                })}
            </section>
            <section className='stackWrapper'>
                <Stack spacing={2}>
                    <Pagination count={10} />
                </Stack>
            </section>  
        </>
        
    )
}

export default BlogsList