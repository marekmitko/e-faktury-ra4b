import { OverrideProps } from '@mui/types';
import * as React from 'react'; 

export type EventHandlers = Record<string, React.EventHandler<any>>;
export type WithOptionalOwnerState<T extends {
    ownerState: unknown;
}> = Omit<T, 'ownerState'> & Partial<Pick<T, 'ownerState'>>;
export type SlotComponentProps<TSlotComponent extends React.ElementType, TOverrides, TOwnerState> = (Partial<React.ComponentPropsWithRef<TSlotComponent>> & TOverrides) | ((ownerState: TOwnerState) => Partial<React.ComponentPropsWithRef<TSlotComponent>> & TOverrides);




export interface MenuUnstyledRootSlotPropsOverrides {
}
export interface MenuUnstyledListboxSlotPropsOverrides {
}
export interface MenuUnstyledActions {
    dispatch: (action: any ) => void;
}
export interface MenuUnstyledOwnProps {
    /**
     * A ref with imperative actions.
     * It allows to select the first or last menu item.
     */
    actions?: React.Ref<MenuUnstyledActions>;
    /**
     * An HTML element, [virtualElement](https://popper.js.org/docs/v2/virtual-elements/),
     * or a function that returns either.
     * It's used to set the position of the popper.
     */
    // anchorEl?: PopperUnstyledProps['anchorEl'];
    anchorEl?: any
    children?: React.ReactNode;
    className?: string;
    defaultOpen?: boolean;
    listboxId?: string;
    /**
     * Triggered when focus leaves the menu and the menu should close.
     */
    onOpenChange?: (open: boolean) => void;
    /**
     * Controls whether the menu is displayed.
     * @default false
     */
    open?: boolean;
    /**
     * The props used for each slot inside the Menu.
     * @default {}
     */
    slotProps?: {
        // root?: SlotComponentProps<typeof PopperUnstyled, MenuUnstyledRootSlotPropsOverrides, MenuUnstyledOwnerState>;
        root?: any;
        listbox?: SlotComponentProps<'ul', MenuUnstyledListboxSlotPropsOverrides, MenuUnstyledOwnerState>;
    };
    /**
     * The components used for each slot inside the Menu.
     * Either a string to use a HTML element or a component.
     * @default {}
     */
    slots?: MenuUnstyledSlots;
}
export interface MenuUnstyledSlots {
    /**
     * The component that renders the root.
     * @default PopperUnstyled
     */
    root?: React.ElementType;
    /**
     * The component that renders the listbox.
     * @default 'ul'
     */
    listbox?: React.ElementType;
}
export interface MenuUnstyledTypeMap<P = {}, D extends React.ElementType = 'ul'> {
    props: P & MenuUnstyledOwnProps;
    defaultComponent: D;
}
export type MenuUnstyledProps<D extends React.ElementType = MenuUnstyledTypeMap['defaultComponent']> = OverrideProps<MenuUnstyledTypeMap<{}, D>, D> & {
    component?: D;
};
export interface MenuUnstyledOwnerState extends MenuUnstyledOwnProps {
    open: boolean;
}
export type MenuUnstyledRootSlotProps = {
    // anchorEl: PopperUnstyledProps['anchorEl'];
    anchorEl: any;
    children?: React.ReactNode;
    className?: string;
    // keepMounted: PopperUnstyledProps['keepMounted'];
    keepMounted: any;
    open: boolean;
    ownerState: MenuUnstyledOwnerState;
    ref: React.Ref<any>;
};
// export type MenuUnstyledListboxSlotProps = UseMenuListboxSlotProps & {
export type MenuUnstyledListboxSlotProps = any & {
    className: string | undefined;
    ownerState: MenuUnstyledOwnerState;
};

