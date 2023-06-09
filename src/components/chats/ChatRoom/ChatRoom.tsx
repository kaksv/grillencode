import Container from '@/components/Container'
import { cx } from '@/utils/class-names'
import { ComponentProps, useRef, useState } from 'react'
import ChatList from '../ChatList/ChatList'
import ChatForm from './ChatForm'
import RepliedMessage from './RepliedMessage'

export type ChatRoomProps = ComponentProps<'div'> & {
  asContainer?: boolean
  scrollableContainerClassName?: string
  postId: string
}

export default function ChatRoom({
  className,
  asContainer,
  scrollableContainerClassName,
  postId,
  ...props
}: ChatRoomProps) {
  const [replyTo, setReplyTo] = useState<string | undefined>(undefined)

  const Component = asContainer ? Container<'div'> : 'div'
  const scrollContainerRef = useRef<HTMLDivElement>(null)

  const scrollToBottom = () => {
    const scrollContainer = scrollContainerRef.current
    if (scrollContainer) {
      scrollContainer?.scrollTo({
        top: scrollContainer?.scrollHeight,
        behavior: 'auto',
      })
    }
  }

  const closeReply = () => setReplyTo(undefined)

  return (
    <div {...props} className={cx('flex flex-col', className)}>
      <ChatList
        newChatNoticeClassName={cx(replyTo && 'bottom-2')}
        postId={postId}
        asContainer={asContainer}
        scrollableContainerClassName={scrollableContainerClassName}
        scrollContainerRef={scrollContainerRef}
        onSelectChatAsReply={setReplyTo}
        replyTo={replyTo}
      />
      <Component
        className={cx('mt-auto flex flex-col py-3', replyTo && 'pt-0')}
      >
        {replyTo && (
          <RepliedMessage
            closeReply={closeReply}
            replyChatId={replyTo}
            scrollContainer={scrollContainerRef}
          />
        )}
        <ChatForm
          replyTo={replyTo}
          onSubmit={scrollToBottom}
          postId={postId}
          clearReplyTo={closeReply}
        />
      </Component>
    </div>
  )
}
