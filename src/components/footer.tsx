import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import { Box, Flex, HStack, Text, Link, Icon, Center } from "@chakra-ui/react"

import { FaTwitter } from "@react-icons/all-files/fa/FaTwitter"
import { FaInstagram } from "@react-icons/all-files/fa/FaInstagram"
import { FaLinkedin } from "@react-icons/all-files/fa/FaLinkedin"

const query = graphql`
  query FooterQuery {
    site {
      siteMetadata {
        social {
          twitter
          instagram
          linkedin
        }
        privacyPolicy
      }
    }
  }
`

/**
 * @description Common footer to display at the bottom of pages
 */
const Footer = () => {
  const data = useStaticQuery(query)
  return (
    <Box as="footer" bg="brand.900" w="100%" color="white" p={2}>
      <Flex
        direction={{ base: "column", md: "row" }}
        justify="space-between"
        align="center"
        wrap="wrap"
      >
        <HStack spacing={8} p={4}>
          <Link
            href={data.site.siteMetadata?.social?.twitter}
            isExternal
            sx={{
              "&:hover": {
                color: "brand.500",
              },
            }}
          >
            <Icon as={FaTwitter} w={6} h={6} />
          </Link>

          <Link
            href={data.site.siteMetadata?.social?.instagram}
            isExternal
            sx={{
              "&:hover": {
                color: "brand.500",
              },
            }}
          >
            <Icon as={FaInstagram} w={6} h={6} />
          </Link>

          <Link
            href={data.site.siteMetadata?.social?.linkedin}
            isExternal
            sx={{
              "&:hover": {
                color: "brand.500",
              },
            }}
          >
            <Icon as={FaLinkedin} w={6} h={6} />
          </Link>
        </HStack>

        <Text m={0} p={4}>
          Written with ❤️️ by back benchers
        </Text>

        <Center p={4}>
          <Text pr={2}>© 2020</Text>
          <Link href={data.site.siteMetadata?.privacyPolicy} isExternal>
            Privacy Policy
          </Link>
        </Center>
      </Flex>
    </Box>
  )
}

export default Footer
