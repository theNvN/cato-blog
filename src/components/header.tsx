import React from "react"
import { graphql, useStaticQuery, Link } from "gatsby"
import {
  Box,
  Flex,
  HStack,
  Text,
  Container,
  Heading,
  Divider,
} from "@chakra-ui/react"

import CatoLogoSvg from "./CatoLogoSvg"

type HeaderProps = {
  title: string
  author?: string
  date?: string
}

const query = graphql`
  query HeaderQuery {
    site {
      siteMetadata {
        description
      }
    }
  }
`

const Header = ({ title, author, date }: HeaderProps) => {
  const data = useStaticQuery(query)
  return (
    <Box bg="brand.500" w="100%" color="white">
      <Flex direction="row" justify="space-between" p={4}>
        <Link to="/">
          <Text as="strong" fontSize="lg">
            cato
          </Text>
          <Text as="strong" fontSize="lg" color="brand.900" ml={1}>
            blog
          </Text>
        </Link>
        <HStack as="nav" spacing={8}>
          <Link to="/">
            <Text>Home</Text>
          </Link>
          <Link to="/authors">
            <Text>Authors</Text>
          </Link>
          <Link to="/archive">
            <Text>Archive</Text>
          </Link>
          <Divider orientation="vertical"></Divider>
          <Link to="https://cato.tv">
            <Text color="brand.900">Cato.tv</Text>
          </Link>
        </HStack>
      </Flex>
      <Container centerContent py={24} px={0}>
        <CatoLogoSvg />

        <Box as="header">
          <Heading size="lg" align="center">
            {title}
          </Heading>
          {author ? <Text>{author}</Text> : ``}
          {date ? <Text>{date}</Text> : ``}
        </Box>
      </Container>
    </Box>
  )
}

export default Header
