import React from 'react';
import { get } from 'lodash';
import Notification from './Notification';

interface NotificationOptions {
  message: React.ReactNode;
  description?: React.ReactNode;
  className?: string;
  top?: number;
  bottom?: number;
  duration?: number | null;
  onClose?: (e: any) => void;
  placement?: 'right-top' | 'left-top' | 'right-bottom' | 'left-bottom';
}

class NotificationFactory {
  notifications: { [key: string]: { notification: Notification, div: HTMLDivElement } };
  defaultPlacement = 'right-top';
  constructor() {
    this.notifications = {};
  }
  
  private genClassName = (placement: string) => `pb-notifcation-${placement}`;

  private getContainer = (placement: string) => {
    if (get(this.notifications, [placement, 'div'], '')) {
      return this.notifications[placement].div;
    }
    const container = document.createElement('div');
    container.className = this.genClassName(placement);
    return container;
  };

  notice = (options: NotificationOptions) => {
    const placement = get(options, 'placement', this.defaultPlacement);
    const div = this.getContainer(placement);
    const content = get(options, 'message', '');
    Notification.newNotificationInstance({
      container: div,
      ...options
    }, (n: any) => {
      this.notifications[placement] = {
        notification: n.component,
        div: div
      }
      n.notice({
        content: content,
        duration: options.duration
      });
    });
  }
}

export default NotificationFactory;