/** @jsx jsx */
import { css, jsx } from '@emotion/core'
import useTheme from 'src/hooks/useTheme'
import { useState } from 'react'

const ReadMore = ({
  rest,
  preview,
  readMoreText,
  showReadMoreTextWhenVisible,
  defaultVisible
}: {
  rest: React.ReactNode
  preview: (readMore: React.ReactNode) => React.ReactNode
  readMoreText: string
  defaultVisible?: boolean
  showReadMoreTextWhenVisible?: boolean
}) => {
  const [visible, setVisible] = useState(defaultVisible)
  const { colors } = useTheme()
  return (
    <>
      {preview(
        !visible ? (
          <>
            {' '}
            <span
              css={css`
                text-decoration: underline;
                cursor: pointer;
                &:hover {
                  background: ${colors('white85')};
                }
              `}
              tabIndex={0}
              role="button"
              aria-pressed="false"
              onClick={() => setVisible(true)}
            >
              {readMoreText}
            </span>
          </>
        ) : (
          <>{showReadMoreTextWhenVisible && <> {readMoreText}</>}</>
        )
      )}
      {visible && rest}
    </>
  )
}

export default ReadMore
