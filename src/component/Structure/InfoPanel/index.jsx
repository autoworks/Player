import React from 'react'
import { arrayOf, node, string } from 'prop-types'

import styles from './InfoPanel.module.scss'

import Panel from '@/component/Primitive/Panel'
import Rule from '@/component/Primitive/Rule'
import Stack from '@/component/Primitive/Stack'
import Tag from '@/component/Primitive/Tag'
import TagList from '@/component/Primitive/TagList'
import Type from '@/component/Primitive/Type'

const InfoPanel = ({
  children,
  text,
  textSecondary,
  tags,
  heading,
  headingSecondary
}) => (
  <Panel>
    <Stack>
      <div className={styles.InfoPanelDefaultContent}>
        <Stack>
          {(heading || text) && (
            <div>
              <Type as="h1" size="display2">
                {heading}
              </Type>
              <Type as="p" size="base">
                {text}
              </Type>
            </div>
          )}

          {tags.length > 0 && (
            <TagList>
              {tags.map((tag, i) => (
                <Tag key={`Tag:${i}`}>{tag}</Tag>
              ))}
            </TagList>
          )}

          {(headingSecondary || textSecondary) && (
            <>
              <Rule />
              <div>
                <Type as="h2" size="display1">
                  {headingSecondary}
                </Type>
                <Type as="p" size="base">
                  {textSecondary}
                </Type>
              </div>
            </>
          )}
        </Stack>
      </div>
      {children}
    </Stack>
  </Panel>
)

InfoPanel.defaultProps = {
  tags: []
}

InfoPanel.propTypes = {
  children: node,
  heading: string,
  text: string,
  tags: arrayOf(string),
  headingSecondary: string,
  textSecondary: string
}

export default InfoPanel
