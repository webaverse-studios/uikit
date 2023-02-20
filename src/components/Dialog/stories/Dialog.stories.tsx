import type { Meta, StoryObj } from '@storybook/react';

import { useState } from 'react';

import { Button } from '@/uikit/components/Button';

import { Dialog, DialogBody, DialogFooter, DialogHeader } from '../index';

const meta: Meta<typeof Dialog> = {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/7.0/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: 'Components/Dialog',
  component: Dialog,
};

export default meta;
type Story = StoryObj<typeof meta>;

/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/7.0/react/api/csf
 * to learn how to use render functions.
 */
export const Basic: Story = {
  render: () => {
    const [open, setOpen] = useState(false);

    const handleOpen = () => setOpen(!open);
    return (
      <>
        <Button onClick={handleOpen} variant="gradient">
          Open Dialog
        </Button>

        <Dialog open={open} handler={handleOpen}>
          <DialogHeader>Its a simple dialog.</DialogHeader>

          <DialogBody divider>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusamus ad reprehenderit
            omnis perspiciatis aut odit! Unde architecto perspiciatis, dolorum dolorem iure quia
            saepe autem accusamus eum praesentium magni corrupti explicabo!
          </DialogBody>

          <DialogFooter>
            <Button variant="text" color="red" onClick={handleOpen} className="mr-1">
              <span>Cancel</span>
            </Button>

            <Button variant="gradient" color="green" onClick={handleOpen}>
              <span>Confirm</span>
            </Button>
          </DialogFooter>
        </Dialog>
      </>
    );
  },
};

export const Themed: Story = {
  render: () => {
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(!open);

    return (
      <>
        <Button onClick={handleOpen} variant="gradient">
          Open Dialog
        </Button>

        <Dialog
          transparent
          open={open}
          handler={handleOpen}
          className="flex h-96 flex-col items-center justify-center bg-[url('../../../../public/ui/bg_frame.png')] bg-contain bg-center bg-no-repeat"
        >
          <img
            src="../../../../public/ui/head.png"
            className="absolute top-0 h-auto w-full max-w-[20%] -translate-y-2/4"
          />

          <DialogHeader className="flex w-3/4 justify-center text-center text-white">
            This is a themed dialog!
          </DialogHeader>

          <DialogFooter>
            <Button onClick={handleOpen} className="mx-1" size="lg" color="white">
              <span>Close</span>
            </Button>

            <Button
              className="mx-1"
              size="lg"
              color="green"
              onClick={() => {
                alert('You Minted!');
              }}
            >
              <span>Mint</span>
            </Button>
          </DialogFooter>
        </Dialog>
      </>
    );
  },
};
