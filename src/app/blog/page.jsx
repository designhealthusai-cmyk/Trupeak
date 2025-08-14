import BlogMain from '@/components/Blogs/BlogMain'
import BlogSection from '@/components/Blogs/BlogSections'
import ContactForm from '@/components/ContactForm'
import ContactSection from '@/components/ContactSection'
import React from 'react'

const blogpage = () => {
    return (
        <>
            <BlogMain />
            <BlogSection />
            <ContactSection />
            <ContactForm />
        </>
    )
}

export default blogpage