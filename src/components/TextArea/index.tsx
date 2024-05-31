import styles from './styles.module.scss';
import { TextareaHTMLAttributes } from 'react';

interface TextAreaProps extends TextareaHTMLAttributes<HTMLTextAreaElement>{}

export function TextArea({rows, cols, ...rest}: TextAreaProps){
  return(
    <textarea
      className={styles.textarea}
      cols={cols}
      rows={rows}
      {...rest}
    >      
    </textarea>
  )
}