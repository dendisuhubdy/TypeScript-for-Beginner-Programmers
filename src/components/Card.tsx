/** @jsx jsx */
import { css, jsx } from '@emotion/core'
import React from 'react'
import { allColors } from 'src/lib/theme/colors'
import useTheme from 'src/hooks/useTheme'
import { H3 } from 'src/components/ContentTags'

export interface CardProps {
  children: React.ReactNode
  color?: 'default' | 'pink' | 'green'
  slideNumber?: number
  slideCount?: number
  isLast?: boolean
  title?: React.ReactNode
  footer?: {
    content: React.ReactNode
    color?: CardProps['color']
  }
}

export interface CardState {
  overrideColor?: CardProps['color']
}

export const backgroundColor = (
  color: NonNullable<CardProps['color']>
): keyof typeof allColors =>
  ({
    default: 'lightYellow1' as const,
    pink: 'lightPink2' as const,
    green: 'lightGreen' as const
  }[color])

const Card = ({
  title,
  color = 'default',
  children,
  slideNumber,
  slideCount,
  isLast,
  footer
}: CardProps) => {
  const { ns, colors, fontSizes, spaces, radii } = useTheme()
  return (
    <>
      <div
        css={css`
          position: relative;
          margin-left: ${spaces('-0.75')};
          margin-right: ${spaces('-0.75')};

          ${ns} {
            margin-left: ${spaces('-1.5')};
            margin-right: ${spaces('-1.5')};
          }
        `}
      >
        {slideNumber && slideCount && (
          <div
            css={css`
              position: absolute;
              bottom: -0.5rem;
              right: 1rem;
              font-size: ${fontSizes(0.75)};
              line-height: 1;
              color: ${colors('white')};
              background: ${colors('brown')};
              padding: ${spaces(0.25)} ${spaces(0.5)};
              border-radius: 9999px;
              user-select: none;
            `}
          >
            <>
              <span
                css={css`
                  color: ${colors('white85')};
                `}
              >
                Slide{' '}
              </span>
              <span
                css={css`
                  font-weight: bold;
                `}
              >
                {slideNumber}
              </span>{' '}
              <span
                css={css`
                  color: ${colors('white85')};
                  font-weight: bold;
                `}
              >
                / {slideCount}
              </span>
            </>
          </div>
        )}
        <div>
          <div
            css={css`
              padding-top: ${spaces(1)};
              padding-left: ${spaces(0.75)};
              padding-right: ${spaces(0.75)};
              padding-bottom: ${spaces(0.5)};

              ${ns} {
                padding-top: ${spaces(1.5)};
                padding-left: ${spaces(1.5)};
                padding-right: ${spaces(1.5)};
                padding-bottom: ${spaces(1)};
              }
              border-top-right-radius: ${radii(0.5)};
              border-top-left-radius: ${radii(0.5)};
              border-bottom-right-radius: ${footer ? 0 : radii(0.5)};
              border-bottom-left-radius: ${footer ? 0 : radii(0.5)};
              background: ${colors(backgroundColor(color))};
            `}
          >
            {title && (
              <H3
                css={[
                  css`
                    text-align: center;
                    margin-left: ${spaces('-0.25')};
                    margin-right: ${spaces('-0.25')};
                  `
                ]}
              >
                {title}
              </H3>
            )}
            {children}
          </div>
          {footer && (
            <div
              css={css`
                margin-top: ${spaces('-0.5')};
                padding: ${spaces(0.75)};

                ${ns} {
                  padding-top: ${spaces(1.25)};
                  padding-left: ${spaces(1.5)};
                  padding-right: ${spaces(1.5)};
                  padding-bottom: ${spaces(1)};
                }
                background: ${colors(backgroundColor(footer.color || 'pink'))};
                border-bottom-right-radius: ${radii(0.5)};
                border-bottom-left-radius: ${radii(0.5)};
              `}
            >
              {footer.content}
            </div>
          )}
        </div>
      </div>
      {!isLast && (
        <div
          css={css`
            width: 1.25rem;
            height: 2rem;
            margin: 0 auto;
            background: ${colors('paleGreen')};
          `}
        />
      )}
    </>
  )
}

export default Card
